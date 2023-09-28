export const authNavigationUrls = {
  signIn: () => '/auth/sign-in',
  logout: () => '/auth/logout',
  signUp: () => '/auth/sign-up',
  forgotPassword: () => '/auth/forgot-password',
  createNewPassword: () => '/auth/create-new-password',
  passwordRecovery: () => '/auth/password-recovery',
  privacyPolicy: () => '/auth/privacy-policy',
  termsOfService: () => '/auth/terms-of-service',
  googleCallback: () => `/auth/callback/google`,
}

export const authApiUrls = {
  signIn: () => '/api/auth/login',
  refreshMe: () => '/api/auth/new-tokens',
  registrationConfirmation: () => '/api/auth/registration-confirmation',
  signUp: () => '/api/auth/registration',
  resendEmail: () => '/api/auth/registration-email-resending',
  logout: () => '/api/auth/logout',
  getMe: () => '/api/auth/me',
  passwordRecovery: () => '/api/auth/password-recovery',
  createNewPassword: () => '/api/auth/new-password',
  openGoogleOAuth: () => '/api/auth/google',
  openGithubOAuth: () => '/api/auth/github',
  signWithGoogle: () => '/api/auth/google/register',
  signWithGithub: () => '/api/auth/github/register',
  googleOAuthPage: () => '/api/auth/google',
  githubOAuthPage: () => '/api/auth/github',
}
