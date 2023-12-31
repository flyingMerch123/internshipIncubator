export const authNavigationUrls = {
  home: () => '/',
  signIn: () => '/auth/sign-in',
  logout: () => '/auth/logout',
  signUp: () => '/auth/sign-up',
  forgotPassword: () => '/auth/forgot-password',
  createNewPassword: () => '/auth/create-new-password',
  passwordRecovery: () => '/auth/password-recovery',
  linkConfirmation: () => '/auth/registration-confirmation',
  newPasswordConfirmation: () => '/auth/new-password-confirmation',
  privacyPolicy: () => '/auth/privacy-policy',
  termsOfService: () => '/auth/terms-of-service',
  googleCallback: () => `/auth/callback/google`,
}

export const authApiUrls = {
  baseUrl: () => 'https://api.freedomindz.site',
  signIn: () => '/api/v1/auth/login',
  refreshMe: () => '/api/v1/auth/refresh-token',
  registrationConfirmation: () => '/api/v1/auth/registration-confirmation',
  signUp: () => '/api/v1/auth/registration',
  resendEmail: () => '/api/v1/auth/resend-code',
  logout: () => '/api/v1/auth/logout',
  getMe: () => '/api/v1/auth/me',
  passwordRecovery: () => '/api/v1/auth/password-recovery',
  createNewPassword: () => '/api/v1/auth/new-password',
  openGoogleOAuth: () => '/api/auth/google',
  openGithubOAuth: () => '/api/auth/github',
  signWithGoogle: () => '/api/auth/google/register',
  signWithGithub: () => '/api/auth/github/register',
  googleOAuthPage: () => '/api/auth/google',
  githubOAuthPage: () => '/api/auth/github',
  getProfile: () => '/api/v1/profile',
  updateProfile: () => '/api/v1/profile',
  uploadAvatar: () => '/api/v1/avatar/upload',
  deleteAvatar: () => '/api/v1/avatar',
}

export const authApiUrlsV2 = {
  baseUrl: () => 'https://inctagram.work',
  signIn: () => '/api/v1/auth/login',
  refreshMe: () => '/api/v1/auth/update-tokens',
  registrationConfirmation: () => '/api/v1/auth/registration-confirmation',
  signUp: () => '/api/v1/auth/registration',
  resendEmail: () => '/api/v1/auth/registration-email-resending',
  logout: () => '/api/v1/auth/logout',
  getMe: () => '/api/v1/auth/me',
  passwordRecovery: () => '/api/v1/auth/password-recovery',
  createNewPassword: () => '/api/v1/auth/new-password',
  openGoogleOAuth: () => '/api/auth/google',
  openGithubOAuth: () => '/api/auth/github',
  signWithGoogle: () => '/api/auth/google/register',
  signWithGithub: () => '/api/auth/github/register',
  googleOAuthPage: () => '/api/auth/google',
  githubOAuthPage: () => '/api/auth/github',
  getProfile: () => '/api/v1/users/profile',
  updateProfile: () => '/api/v1/users/profile',
  uploadAvatar: () => '/api/v1/users/profile/avatar',
  deleteAvatar: () => '/api/v1/users/profile/avatar',
}
