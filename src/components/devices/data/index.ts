import {
  BraveBrowserIcon,
  ChromeBrowserIcon,
  DesktopIcon,
  EdgeBrowserIcon,
  ExplorerBrowserIcon,
  FirefoxBrowserIcon,
  MobileIcon,
  OperaBrowserIcon,
  SafariBrowserIcon,
  SVGIconType,
  UcBrowserIcon,
  YandexBrowserIcon,
} from '@/app'

type IconDataType = {
  [key: string]: { [key: string]: SVGIconType }
}
export const SESSION_DEVICE_ICON: IconDataType = {
  SESSION: {
    DESKTOP: DesktopIcon,
    MOBILE: MobileIcon,
  },
  DEVICE: {
    BRAVE: BraveBrowserIcon,
    CHROME: ChromeBrowserIcon,
    EDGE: EdgeBrowserIcon,
    EXPLORER: ExplorerBrowserIcon,
    FIREFOX: FirefoxBrowserIcon,
    OPERA: OperaBrowserIcon,
    SAFARI: SafariBrowserIcon,
    YANDEX: YandexBrowserIcon,
    UC: UcBrowserIcon,
  },
}
