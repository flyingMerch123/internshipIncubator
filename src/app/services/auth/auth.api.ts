import { authApiUrls, authApiUrlsV2 } from '@/app/constants/routes/auth'
import {
  Code,
  GetMe,
  NewPasswordCredentials,
  SignInCredentials,
  UserCredentials,
} from '@/app/services/auth/auth.api.types'
import { commonApi } from '@/app/services/common/common.api'
import { GoogleUser } from '@/app/services/google/google.api.types'

const {
  signIn,
  signUp,
  createNewPassword,
  passwordRecovery,
  refreshMe,
  logout,
  signWithGoogle,
  getMe,
  githubOAuthPage,
  googleOAuthPage,
  registrationConfirmation,
  resendEmail,
} = authApiUrls

export const authAPI = commonApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<GetMe, void>({
      query: () => {
        return {
          method: 'GET',
          url: getMe(),
        }
      },
      extraOptions: { maxRetries: 0 },
      providesTags: ['ME'],
    }),
    signUp: builder.mutation<void, UserCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: signUp(),
          body: args,
        }
      },
    }),
    resendEmail: builder.mutation<void, Code>({
      query: code => {
        return {
          method: 'POST',
          url: resendEmail(),
          body: code,
        }
      },
    }),
    emailConfirmation: builder.mutation<void, Code>({
      query: code => {
        return {
          method: 'POST',
          url: registrationConfirmation(),
          params: code,
        }
      },
    }),
    passwordRecovery: builder.mutation<void, { email: string }>({
      query: args => {
        return {
          method: 'POST',
          url: passwordRecovery(),
          body: args,
        }
      },
    }),
    createNewPassword: builder.mutation<void, NewPasswordCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: createNewPassword(),
          body: args,
        }
      },
    }),
    signIn: builder.mutation<{ accessToken: string }, SignInCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: signIn(),
          body: args,
        }
      },

      invalidatesTags: ['ME'],
    }),
    refreshMe: builder.mutation<{ accessToken: string }, void>({
      query: () => {
        return {
          method: 'POST',
          url: refreshMe(),
        }
      },
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: logout(),
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
      invalidatesTags: ['ME'],
    }),

    googleAuth: builder.mutation<any, GoogleUser>({
      query: user => {
        return {
          method: 'POST',
          url: signWithGoogle(),
          body: user,
        }
      },
    }),
    googleOAuthPage: builder.query<void, void>({
      query: user => {
        return {
          method: 'GET',
          url: googleOAuthPage(),
          body: user,
        }
      },
    }),

    githubOAuthPage: builder.query<void, void>({
      query: () => {
        return {
          method: 'GET',
          url: githubOAuthPage(),
        }
      },
    }),
  }),
})

export const {
  useEmailConfirmationMutation,
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
