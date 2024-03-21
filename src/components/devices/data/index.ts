import {
  BraveBrowserIcon,
  ChromeBrowserIcon,
  DesktopIcon,
  EdgeBrowserIcon,
  ExplorerBrowserIcon,
  FirefoxBrowserIcon,
  MobileIcon,
  OperaBrowserIcon,
  SVGIconType,
  SafariBrowserIcon,
  UcBrowserIcon,
  YandexBrowserIcon,
} from '@/app'

type IconDataType = {
  [key: string]: { [key: string]: SVGIconType }
}
export const SESSION_DEVICE_ICON: IconDataType = {
  DEVICE: {
    BRAVE: BraveBrowserIcon,
    CHROME: ChromeBrowserIcon,
    EDGE: EdgeBrowserIcon,
    EXPLORER: ExplorerBrowserIcon,
    FIREFOX: FirefoxBrowserIcon,
    OPERA: OperaBrowserIcon,
    SAFARI: SafariBrowserIcon,
    UC: UcBrowserIcon,
    YANDEX: YandexBrowserIcon,
  },
  SESSION: {
    DESKTOP: DesktopIcon,
    MOBILE: MobileIcon,
  },
}
