const SESSION_DEVICES = {
  DESKTOP: 'DESKTOP',
  MOBILE: 'MOBILE',
} as const

const BROWSERS = {
  BRAVE: 'BRAVE',
  CHROME: 'CHROME',
  EDGE: 'EDGE',
  EXPLORER: 'EXPLORER',
  FIREFOX: 'FIREFOX',
  OPERA: 'OPERA',
  SAFARI: 'SAFARI',
  UC: 'UC',
  YANDEX: 'YANDEX',
} as const

type ObjectValuesType<T> = T[keyof T]

export type SessionDeviceType = ObjectValuesType<typeof SESSION_DEVICES>

export type BrowserType = ObjectValuesType<typeof BROWSERS>
