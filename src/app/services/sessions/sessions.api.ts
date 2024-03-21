import { sessionApiUrls } from '@/app/constants/routes/sessions'
import { commonApi } from '@/app/services/common/common.api'
import { SessionsType } from '@/app/services/sessions/sessions.types'

const { allSessions, sessionById, terminateAll } = sessionApiUrls

export const sessionsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    getSessions: builder.query<SessionsType, void>({
      providesTags: ['Sessions'],
      query: () => {
        return {
          method: 'GET',
          url: allSessions(),
        }
      },
    }),
    terminateAllSessions: builder.mutation<void, void>({
      invalidatesTags: ['ME', 'Sessions'],
      query: () => {
        return {
          method: 'DELETE',
          url: terminateAll(),
        }
      },
    }),
    terminateSessionById: builder.mutation<void, { deviceId: number }>({
      invalidatesTags: ['ME', 'Sessions'],
      query: ({ deviceId }) => {
        return {
          method: 'DELETE',
          url: sessionById(deviceId),
        }
      },
    }),
  }),

  overrideExisting: true,
})

export const {
  useGetSessionsQuery,
  useTerminateAllSessionsMutation,
  useTerminateSessionByIdMutation,
} = sessionsApi
