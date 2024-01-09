export type UserProfileModel = {
  id: number
  userName: string
  firstName: string
  lastName: string
  city?: string
  dateOfBirth?: string
  aboutMe?: string
  avatars: UserProfileModelAvatars[]
  createdAt: string
  country?: string
  avatarUrl?: string
}
export type UserProfileModelAvatars = {
  url: string
  width: number
  height: number
  fileSize: number
}
export type UpdateUserProfile = Pick<
  UserProfileModel,
  'userName' | 'lastName' | 'firstName' | 'city' | 'dateOfBirth' | 'aboutMe' | 'country'
>
export type UploadAvatarResponse = {
  avatars: AvatarModel[]
}
export type AvatarModel = {
  url: string
  width: number
  height: number
  fileSize: number
}

export type GeneralSettingsType = {
  userName: string
  firstName: string
  lastName: string
  dateOfBirth?: Date | string
  country?: string
  city?: string
  aboutMe?: string
}
