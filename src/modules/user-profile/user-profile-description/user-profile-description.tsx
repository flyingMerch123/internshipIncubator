import Link from 'next/link'

import s from './user-profile-description.module.scss'

import { CheckedIcon, useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { Avatar } from '@/components'
import { UserStatistics } from '@/components/user-profile/user-statistics'
import { Button, Typography } from '@/ui'

export const UserProfileDescription = () => {
  const { data, isLoading: isProfileLoading } = useGetProfileQuery()
  const { t } = useTranslation()
  const { profile } = t.profileSettings.generalSettings

  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <Avatar src={data?.avatarUrl ? data?.avatarUrl : '/assets/avatar/avatar.jpg'} />
      </div>

      <div className={s.profile}>
        <div className={s.header}>
          <div className={s.title}>
            <Typography as={'h1'} variant={'h1'}>
              {data?.userName ? data?.userName : 'userURL'}
            </Typography>
            <CheckedIcon />
          </div>
          <Button as={Link} href={menuNavigation.settings()} variant={'secondary'}>
            {profile.btn.label}
          </Button>
        </div>
        <UserStatistics />
        <Typography as={'p'} variant={'regular-16'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco.{' '}
          <Typography as={'span'} variant={'regular-link'}>
            <Link href={'#'}>laboris nisi ut aliquip ex ea commodo consequat.</Link>
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
