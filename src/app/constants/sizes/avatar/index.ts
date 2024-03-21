const MOBILE_DEFAULT_SIZE = 72
const DESKTOP_DEFAULT_SIZE = 204

export const AVATAR_SIZE = {
  DESKTOP: DESKTOP_DEFAULT_SIZE,
  MOBILE: MOBILE_DEFAULT_SIZE,
  set(isMobile: boolean = false) {
    return isMobile ? this.MOBILE : this.DESKTOP
  },
}
