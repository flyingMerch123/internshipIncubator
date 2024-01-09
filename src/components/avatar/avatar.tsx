import { ComponentPropsWithoutRef } from 'react'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

import { AccountIcon, CloseIcon, useMatchMedia } from '@/app'
import { AVATAR_SIZE } from '@/app/constants/sizes/avatar'
import { Button } from '@/ui'

export type AvatarPropsType = {
  width?: number
  height?: number
  iconScale?: number
  rounded?: boolean
  delay?: number
  className?: string
  onDelete?: () => void
} & ComponentPropsWithoutRef<'img'>

export const Avatar = ({
  rounded = true,
  src,
  alt = 'avatar image',
  delay = 0,
  className,
  onDelete,
  iconScale,
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
          <RadixAvatar.Image width={width} height={height} src={src} alt={alt} {...props} />
        </div>

        <RadixAvatar.Fallback asChild delayMs={delay}>
          <div className={s.image} style={{ width, height }} role={'image'} aria-label={alt}>
            <AccountIcon style={{ transform: `scale(${iconScale})` }} />
          </div>
        </RadixAvatar.Fallback>
      </div>

      {isDeleteFunctionAvailable && (
        <Button className={s.btn} onClick={onDelete}>
          <CloseIcon bgColor="#CC1439" rounded width={16} height={16} />
        </Button>
      )}
    </RadixAvatar.Root>
  )
}
