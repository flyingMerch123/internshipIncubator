import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react'
import { Mutex } from 'async-mutex'

import { authApiUrls } from '@/app/constants'
import { getFromSessionStorage, setToSessionStorage } from '@/app/utils'

const { baseUrl, logout, refreshMe } = authApiUrls

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl(),
  credentials: 'include',
  prepareHeaders: headers => {
    const token = getFromSessionStorage('accessToken', null)

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const mutex = new Mutex()
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result?.meta?.response?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            method: 'POST',
            url: refreshMe(),
          },
          api,
          extraOptions
        )

        if (refreshResult.meta?.response?.status === 200) {
          result = await baseQuery(args, api, extraOptions)
        } else {
          await baseQuery(
            {
              url: logout(),
              method: 'POST',
            },
            api,
            extraOptions
          )
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  // eslint-disable-next-line no-prototype-builtins
  if ((result?.data as { accessToken?: string })?.hasOwnProperty('accessToken')) {
    setToSessionStorage('accessToken', (result.data as { accessToken: string }).accessToken)
  }
  if (result?.meta?.request.url === 'https://api.freedomindz.site/api/v1/auth/logout') {
    sessionStorage.removeItem('accessToken')
  }

  return result
}

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['ME', 'Profile'],
  endpoints: () => ({}),
})
