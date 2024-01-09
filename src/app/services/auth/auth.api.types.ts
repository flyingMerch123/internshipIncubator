import { Nullable } from '@/app'

export type GitHubUser = {
  login: string
  node_id: string
  avatar_url: string
  name: string
  email: string
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

export type GetMe = Nullable<Partial<SignInCredentials & { userId: number }>>
