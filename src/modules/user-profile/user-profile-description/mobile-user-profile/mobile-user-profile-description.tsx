import { CheckedIcon } from '@/app'
import { Avatar, UserStatistics } from '@/components'
import { Typography } from '@/ui'
import Link from 'next/link'

import s from './mobile-user-profile-description.module.scss'

export const MobileUserProfileDescription = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.avatar}>
          <Avatar src={'/assets/avatar/avatar.jpg'} />
        </div>
        <UserStatistics />
      </div>

      <div className={s.title}>
        <Typography as={'h1'} variant={'h1'}>
          URLProfile
        </Typography>
        <CheckedIcon />
      </div>

      <Typography as={'p'} variant={'regular-14'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.{' '}
        <Typography as={'span'} variant={'regular-link'}>
          <Link href={'#'}>laboris nisi ut aliquip ex ea commodo consequat.</Link>
        </Typography>
      </Typography>
    </div>
  )
}
