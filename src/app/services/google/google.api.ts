import { GetGoogleUser, GoogleUser } from '@/app/services/google/google.api.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const googleApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com' }),
  endpoints: builder => ({
    getGoogle: builder.mutation<GoogleUser, GetGoogleUser>({
      query: args => ({
        method: 'POST',
        params: { access_token: args.access_token },
        url: `/oauth2/v3/userinfo`,
      }),
    }),
  }),
  reducerPath: 'googleApi',
})

export const { useGetGoogleMutation } = googleApi
