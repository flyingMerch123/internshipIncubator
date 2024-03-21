import { Nullable } from '@/app'

export type GitHubUser = {
  avatar_url: string
  email: string
  login: string
  name: string
  node_id: string
}
export type UserCredentials = {
  email: string
  login: string
  password: string
}

export type Code = {
  code: string
}

export type NewPasswordCredentials = {
  newPassword: string
  recoveryCode: string
}
export type SignInCredentials = {
  email: string
  password: string
}

export type UserModel = Nullable<{
  email: string
  userId: number
  userName: string
}>
export type PasswordRecovery = {
  baseUrl: string
  email: string
  recaptcha: string
}
export type UserRegistrationParams = {
  baseUrl: string
  email: string
  password: string
  userName: string
}
