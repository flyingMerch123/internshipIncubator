import { authApiUrls } from '@/app/constants/routes/auth'
import {
  Code,
  NewPasswordCredentials,
  SignInCredentials,
  UserCredentials,
} from '@/app/services/auth/auth.api.types'
import { commonApi } from '@/app/services/common/common.api'
import { GoogleUser } from '@/app/services/google/google.api.types'

export const authAPI = commonApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, void>({
      query: () => {
        return {
          method: 'GET',
          url: authApiUrls.getMe(),
        }
      },
      extraOptions: { maxRetries: 0 },
      providesTags: ['ME'],
    }),
    signUp: builder.mutation<void, UserCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: authApiUrls.signUp(),
          body: args,
        }
      },
    }),
    resendEmail: builder.mutation<void, Code>({
      query: code => {
        return {
          method: 'POST',
          url: authApiUrls.resendEmail(),
          body: code,
        }
      },
    }),
    confirmAccount: builder.query<void, Code>({
      query: code => {
        return {
          method: 'GET',
          url: authApiUrls.registrationConfirmation(),
          params: code,
        }
      },
    }),
    passwordRecovery: builder.mutation<void, { email: string }>({
      query: email => {
        return {
          method: 'POST',
          url: authApiUrls.passwordRecovery(),
          body: email,
        }
      },
    }),
    createNewPassword: builder.mutation<void, NewPasswordCredentials>({
      query: ({ newPassword, token }) => {
        return {
          method: 'POST',
          url: authApiUrls.createNewPassword(),
          body: { newPassword },
          params: { token },
        }
      },
    }),
    signIn: builder.mutation<{ accessToken: string }, SignInCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: authApiUrls.signIn(),
          body: args,
        }
      },
      // async onQueryStarted({ ...args }, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled
      //     const patchResult = dispatch(authActions.setToken({ accessToken: data.accessToken }))
      //   } catch {
      //     console.log('error')
      //   }
      // },
      invalidatesTags: ['ME'],
    }),
    refreshMe: builder.query<{ accessToken: string }, void>({
      query: () => {
        return {
          method: 'GET',
          url: authApiUrls.refreshMe(),
        }
      },
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: authApiUrls.logout(),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authAPI.util.updateQueryData('getMe', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
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
  usePasswordRecoveryMutation,
  useCreateNewPasswordMutation,
  useRefreshMeQuery,
  useResendEmailMutation,
  useSignOutMutation,
  useGetMeQuery,
  useSignUpMutation,
  useSignInMutation,
  useGithubOAuthPageQuery,
  useGoogleOAuthPageQuery,
  useGoogleAuthMutation,
} = authAPI
