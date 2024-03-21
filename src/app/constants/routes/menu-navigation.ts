export const menuNavigation = {
  account: () => '/user-profile/settings/account',
  create: () => '/create',
  devices: () => '/user-profile/settings/devices',
  favorites: () => '/favorites',
  home: () => '/',
  messenger: () => '/messenger',
  payments: () => '/user-profile/settings/payments',
  post: (id?: number, postId?: number) => `/user-profile/${id}/${postId}`,
  profile: (id?: number) => `/user-profile/${id}`,
  search: () => '/search',
  settings: () => '/user-profile/settings',
  statistics: () => '/statistics',
}
