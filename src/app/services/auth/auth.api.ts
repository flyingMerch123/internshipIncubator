import { authApiUrls } from '@/app/constants/routes/auth'
import {
  Code,
  GetMe,
  NewPasswordCredentials,
  SignInCredentials,
  UserCredentials,
} from '@/app/services/auth/auth.api.types'
import { commonApi } from '@/app/services/common/common.api'
import { GoogleUser } from '@/app/services/google/google.api.types'

export const authAPI = commonApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<GetMe, void>({
      query: () => {
        return {
          method: 'GET',
          url: '/api/v1/auth/me',
        }
      },
      extraOptions: { maxRetries: 0 },
      providesTags: ['ME'],
    }),
    signUp: builder.mutation<void, UserCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: '/api/v1/auth/registration',
          body: args,
        }
      },
    }),
    resendEmail: builder.mutation<void, Code>({
      query: code => {
        return {
          method: 'POST',
          url: '/api/v1/auth/resend-code',
          body: code,
        }
      },
    }),
    confirmAccount: builder.query<void, Code>({
      query: code => {
        return {
          method: 'GET',
          url: '/api/v1/auth/registration-confirmation',
          params: code,
        }
      },
    }),
    passwordRecovery: builder.mutation<void, { email: string }>({
      query: email => {
        return {
          method: 'POST',
          url: '/api/v1/auth/password-recovery',
          body: email,
        }
      },
    }),
    createNewPassword: builder.mutation<void, NewPasswordCredentials>({
      query: ({ newPassword, recoveryCode }) => {
        return {
          method: 'POST',
          url: '/api/v1/auth/new-password',
          body: { newPassword },
          params: { recoveryCode },
        }
      },
    }),
    signIn: builder.mutation<{ accessToken: string }, SignInCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: '/api/v1/auth/login',
          body: args,
        }
      },

      invalidatesTags: ['ME'],
    }),
    refreshMe: builder.mutation<{ accessToken: string }, void>({
      query: () => {
        return {
          method: 'POST',
          url: '/api/v1/auth/refresh-token',
        }
      },
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: '/api/v1/auth/logout',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(
          authAPI.util.updateQueryData('getMe', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          //TODO uncomment after back logoff will be ready
          //patchResult.undo()
        }
      },
    }),

    googleAuth: builder.mutation<any, GoogleUser>({
      query: user => {
        return {
          method: 'POST',
          url: authApiUrls.signWithGoogle(),
          body: user,
        }
      },
    }),
    googleOAuthPage: builder.query<void, void>({
      query: user => {
        return {
          method: 'GET',
          url: authApiUrls.googleOAuthPage(),
          body: user,
        }
      },
    }),

    githubOAuthPage: builder.query<void, void>({
      query: () => {
        return {
          method: 'GET',
          url: authApiUrls.githubOAuthPage(),
        }
      },
    }),
  }),
})

export const {
  useConfirmAccountQuery,
  useRefreshMeMutation,
  usePasswordRecoveryMutation,
  useCreateNewPasswordMutation,
  useResendEmailMutation,
  useSignOutMutation,
  useGetMeQuery,
  useSignUpMutation,
  useSignInMutation,
  useGithubOAuthPageQuery,
  useGoogleOAuthPageQuery,
  useGoogleAuthMutation,
} = authAPI
