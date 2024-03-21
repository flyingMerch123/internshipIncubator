import { sessionApiUrls } from '@/app/constants/routes/sessions'
import { IpGeolocationType } from '@/app/services/ipgeolocation/ipgeolocation.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const { ipGeolocationAPI } = sessionApiUrls

export const ipGeolocationApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.ipgeolocation.io` }),
  endpoints: builder => ({
    getGeolocation: builder.query<IpGeolocationType, { apiKEY: string }>({
      query: args => ({
        method: 'GET',
        url: ipGeolocationAPI(args.apiKEY),
      }),
    }),
  }),
  reducerPath: 'locationIpApi',
})

export const { useGetGeolocationQuery } = ipGeolocationApi
