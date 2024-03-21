import { profileApiUrls } from '@/app/constants'
import { commonApi } from '@/app/services/common/common.api'
import {
  PublicUserModel,
  UpdateUserProfile,
  UserProfileModel,
} from '@/app/services/profile/profile.api.types'

const { publicUserById, usersAvatar, usersProfile, usersProfileById } = profileApiUrls

export const profileApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    deleteAvatar: builder.mutation<void, void>({
      invalidatesTags: ['Profile'],
      query: () => {
        return {
          method: 'DELETE',
          url: usersAvatar(),
        }
      },
    }),

    deleteUserProfile: builder.mutation<void, { id?: number }>({
      invalidatesTags: ['Profile'],
      query: args => {
        return {
          body: args,
          method: 'DELETE',
          url: usersProfileById(args.id),
        }
      },
    }),

    getProfile: builder.query<UserProfileModel, void>({
      providesTags: ['Profile'],
      query: () => {
        return {
          method: 'GET',
          url: usersProfile(),
        }
      },
    }),

    getPublicUserProfileById: builder.query<PublicUserModel, { profileId: number }>({
      query: args => {
        return {
          method: 'GET',
          url: publicUserById(args.profileId),
        }
      },
    }),

    updateUserProfile: builder.mutation<void, UpdateUserProfile>({
      invalidatesTags: ['Profile'],
      query: args => {
        return {
          body: args,
          method: 'PUT',
          url: usersProfile(),
        }
      },
    }),
    uploadAvatar: builder.mutation<void, FormData>({
      invalidatesTags: ['Profile'],
      query: form => {
        return {
          body: form,
          method: 'POST',
          url: usersAvatar(),
        }
      },
    }),
  }),
  overrideExisting: true,
})

export const {
  useDeleteAvatarMutation,
  useGetProfileQuery,
  useGetPublicUserProfileByIdQuery,
  useUpdateUserProfileMutation,
  useUploadAvatarMutation,
} = profileApi
export const { getPublicUserProfileById } = profileApi.endpoints
