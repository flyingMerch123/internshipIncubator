import { LogOutMenuIcon, SVGIconType, setDateFormat, useMatchMedia, useTranslation } from '@/app'
import { SessionModel } from '@/app/services/sessions/sessions.types'
import { Card, MenuItem, Typography } from '@/ui'
import { clsx } from 'clsx'

import s from './device-information-card.module.scss'

import { SESSION_DEVICE_ICON } from './data'
import { BrowserType, SessionDeviceType } from './model'

export const SESSION_CARD_TYPE = {
  DEVICE: 'DEVICE',
  SESSION: 'SESSION',
} as const

type VariantType = {
  DEVICE: BrowserType
  SESSION: SessionDeviceType
}

type DeviceInformationCardProps<T extends keyof typeof SESSION_CARD_TYPE> = {
  className?: string
  currentIp?: string
  getSessionId?: (sessionId: number) => void
  session: SessionModel
  type: T
  variant: VariantType[T]
}

export const DeviceInformationCard = <T extends keyof typeof SESSION_CARD_TYPE>({
  className,
  getSessionId,
  session,
  type,
  variant,
}: DeviceInformationCardProps<T>) => {
  const { isMobile } = useMatchMedia()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const styles = clsx(s.container, className)

  const SVGIcon: SVGIconType = SESSION_DEVICE_ICON[type][variant]

  const logoutHandler = () => {
    getSessionId && getSessionId(session.deviceId)
  }

  const LogoutButton = type === SESSION_CARD_TYPE.SESSION && (
    <MenuItem
      as={'button'}
      asListItem={false}
      icon={LogOutMenuIcon}
      isStyled={!isMobile}
      label={labels.logout}
      onClick={logoutHandler}
    />
  )

  return (
    <Card className={styles}>
      <div className={s.wrapper}>
        <div className={s.icon}>
          <SVGIcon />
        </div>

        <div className={s.details}>
          <Typography as={'p'} variant={'bold-16'}>
            {session.deviceName}
          </Typography>
          <Typography as={'p'} variant={'regular-14'}>
            {`IP: ${session.ip}`}
          </Typography>
          <Typography as={'p'} variant={'small'}>
            {`Last visit: ${setDateFormat(session.lastActive)}`}
          </Typography>
        </div>
      </div>

      <div className={s.btn}>{LogoutButton}</div>
    </Card>
  )
}
