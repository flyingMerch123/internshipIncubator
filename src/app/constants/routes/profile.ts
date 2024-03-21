export const profileApiUrls = {
  publicUserById: (profileId: number) => `/api/v1/public-user/profile/${profileId}`,
  usersAvatar: () => '/api/v1/users/profile/avatar' as const,
  usersProfile: () => `/api/v1/users/profile/` as const,
  usersProfileById: (id?: number) => `/api/v1/users/profile/${id}` as const,
}
