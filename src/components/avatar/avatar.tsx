import { ComponentPropsWithoutRef } from 'react'

import { AccountIcon, CloseIcon, useMatchMedia } from '@/app'
import { AVATAR_SIZE } from '@/app/constants/sizes/avatar'
import { Button } from '@/ui'
import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export type AvatarPropsType = {
  className?: string
  delay?: number
  height?: number
  iconScale?: number
  onDelete?: () => void
  rounded?: boolean
  width?: number
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({
  alt = 'avatar image',
  className,
  delay = 0,
  iconScale,
  onDelete,
  rounded = true,
  src,
  ...props
}: AvatarPropsType) => {
  const { isMobile } = useMatchMedia()
  const defaultSize = { x: AVATAR_SIZE.set(isMobile), y: AVATAR_SIZE.set(isMobile) }

  const isDeleteFunctionAvailable: boolean = Boolean(src && onDelete)

  const { height = defaultSize.y, width = defaultSize.x } = props

  const styles = clsx(s.wrapper, rounded && s.rounded, className)

  return (
    <RadixAvatar.Root className={s.container}>
      <div className={styles}>
        <div className={s.image}>
          <RadixAvatar.Image alt={alt} height={height} src={src} width={width} {...props} />
        </div>

        <RadixAvatar.Fallback asChild delayMs={delay}>
          <div aria-label={alt} className={s.image} role={'image'} style={{ height, width }}>
            <AccountIcon style={{ transform: `scale(${iconScale})` }} />
          </div>
        </RadixAvatar.Fallback>
      </div>

      {isDeleteFunctionAvailable && (
        <Button className={s.btn} onClick={onDelete}>
          <CloseIcon bgColor={'#CC1439'} height={16} rounded width={16} />
        </Button>
      )}
    </RadixAvatar.Root>
  )
}
