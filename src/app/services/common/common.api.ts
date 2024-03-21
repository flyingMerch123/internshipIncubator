import { authApiUrls } from '@/app/constants'
import { getFromSessionStorage, setToSessionStorage } from '@/app/utils'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/dist/query/react'
import { Mutex } from 'async-mutex'
import { HYDRATE } from 'next-redux-wrapper'

const { refreshMe, signOut } = authApiUrls

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BASE_API_URL,
  credentials: 'include',
  prepareHeaders: headers => {
    if (typeof window !== 'undefined') {
      const token = getFromSessionStorage('accessToken', null)

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
    }

    return headers
  },
})

const mutex = new Mutex()
const baseQueryWithReauth: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (
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
              method: 'POST',
              url: signOut(),
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
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-prototype-builtins
    if ((result?.data as { accessToken?: string })?.hasOwnProperty('accessToken')) {
      setToSessionStorage('accessToken', (result.data as { accessToken: string }).accessToken)
    }
    if (result?.meta?.request.url === process.env.BASE_API_URL + signOut()) {
      sessionStorage.removeItem('accessToken')
    }
  }

  return result
}

export const commonApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  reducerPath: 'commonApi',
  tagTypes: ['ME', 'Profile', 'Posts', 'Images', 'Subscriptions', 'Sessions'],
})

export const {
  util: { getRunningQueriesThunk },
} = commonApi
