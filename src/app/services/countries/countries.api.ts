import {
  CitiesOfCountry,
  TransformedCitiesData,
} from '@/app/services/countries/countries.api.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const locationApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://countriesnow.space',
  }),

  endpoints: builder => ({
    getCities: builder.mutation<TransformedCitiesData[], { country: string }>({
      query: country => ({
        body: country,
        method: 'POST',
        url: `/api/v0.1/countries/cities`,
      }),
      transformResponse: (response: CitiesOfCountry): TransformedCitiesData[] =>
        response?.data?.map(city => ({ label: city, value: city.toLowerCase() })),
    }),
  }),
  reducerPath: 'locationApi',
})

export const { useGetCitiesMutation } = locationApi
