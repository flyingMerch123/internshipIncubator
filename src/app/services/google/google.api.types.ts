export type GoogleUser = {
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  locale: string
  name: string
  picture: string
  sub: string
}
export type GetGoogleUser = {
  access_token: string
}
