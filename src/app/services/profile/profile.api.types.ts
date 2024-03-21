import { Nullable } from '@/app'

export type UserProfileModel = {
  aboutMe: string
  avatars: UserProfileModelAvatars[]
  city: string
  createdAt: string
  dateOfBirth: string
  firstName: string
  id: number
  lastName: string
  userName: string
}

export type UserProfileModelAvatars = {
  fileSize: number
  height: number
  url: string
  width: number
}
export type UpdateUserProfile = {
  aboutMe: Nullable<string>
  city: Nullable<string>
  dateOfBirth: Nullable<string>
  firstName: Nullable<string>
  lastName: Nullable<string>
  userName: string
}
export type UploadAvatarResponse = {
  avatars: AvatarModel[]
}
export type AvatarModel = {
  fileSize: number
  height: number
  url: string
  width: number
}

export type GeneralSettingsType = {
  aboutMe?: string
  city?: string
  country?: string
  dateOfBirth?: Date | string
  firstName: string
  lastName: string
  posts: {
    totalCount: number
  }
  userName: string
}

export type PublicUserModel = {
  aboutMe: string
  avatars: PublicUserModelAvatars[]
  id: number
  userName: string
}
export type PublicUserModelAvatars = {
  fileSize: number
  height: number
  url: string
  width: number
}
