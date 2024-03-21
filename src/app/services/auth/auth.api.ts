import { authApiUrls } from '@/app/constants/routes/auth'
import {
  NewPasswordCredentials,
  PasswordRecovery,
  SignInCredentials,
  UserModel,
  UserRegistrationParams,
} from '@/app/services/auth/auth.api.types'
import { commonApi } from '@/app/services/common/common.api'

const {
  checkRecoveryCode,
  createNewPassword,
  getMe,
  loginGithubOAuth,
  loginGoogleOAuth,
  passwordRecovery,
  refreshMe,
  registrationConfirmation,
  resendEmail,
  signIn,
  signOut,
  signUp,
} = authApiUrls

export const authAPI = commonApi.injectEndpoints({
  endpoints: builder => ({
    checkRecoveryCode: builder.mutation<{ email: string }, { recoveryCode: string }>({
      query: ({ recoveryCode }) => {
        return {
          body: { recoveryCode },
          method: 'POST',
          url: checkRecoveryCode(),
        }
      },
    }),
    createNewPassword: builder.mutation<void, NewPasswordCredentials>({
      query: args => {
        return {
          body: args,
          method: 'POST',
          url: createNewPassword(),
        }
      },
    }),
    emailConfirmation: builder.mutation<
      void,
      {
        confirmationCode: string
      }
    >({
      query: code => {
        return {
          body: { confirmationCode: code.confirmationCode },
          method: 'POST',
          url: registrationConfirmation(),
        }
      },
    }),
    getMe: builder.query<UserModel, void>({
      extraOptions: { maxRetries: 0 },
      providesTags: ['ME'],
      query: () => {
        return {
          method: 'GET',
          url: getMe(),
        }
      },
    }),
    githubOAuth: builder.query<void, void>({
      query: () => {
        return {
          method: 'GET',
          url: loginGithubOAuth(),
        }
      },
    }),
    googleOAuth: builder.mutation<
      {
        accessToken: string
        email: string
      },
      { code: string }
    >({
      query: user => {
        return {
          body: user,
          method: 'POST',
          url: loginGoogleOAuth(),
        }
      },
    }),
    passwordRecovery: builder.mutation<void, PasswordRecovery>({
      query: args => {
        return {
          body: args,
          method: 'POST',
          url: passwordRecovery(),
        }
      },
    }),
    refreshMe: builder.mutation<{ accessToken: string }, void>({
      query: () => {
        return {
          method: 'POST',
          url: refreshMe(),
        }
      },
    }),

    resendEmail: builder.mutation<
      void,
      {
        baseUrl: string
        email: string
      }
    >({
      query: code => {
        return {
          body: code,
          method: 'POST',
          url: resendEmail(),
        }
      },
    }),
    signIn: builder.mutation<{ accessToken: string }, SignInCredentials>({
      invalidatesTags: ['ME'],
      query: args => {
        return {
          body: args,
          method: 'POST',
          url: signIn(),
        }
      },
    }),

    signOut: builder.mutation<void, void>({
      invalidatesTags: ['ME'],
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
      query: () => ({
        method: 'POST',
        url: signOut(),
      }),
    }),

    signUp: builder.mutation<void, UserRegistrationParams>({
      query: args => {
        return {
          body: args,
          method: 'POST',
          url: signUp(),
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const {
  useCheckRecoveryCodeMutation,
  useCreateNewPasswordMutation,
  useEmailConfirmationMutation,
  useGetMeQuery,
  usePasswordRecoveryMutation,
  useRefreshMeMutation,
  useResendEmailMutation,
  useSignInMutation,
  useSignOutMutation,
  useSignUpMutation,
} = authAPI
