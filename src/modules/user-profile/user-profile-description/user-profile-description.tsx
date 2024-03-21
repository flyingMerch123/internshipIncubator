import { CheckedIcon, useMatchMedia, useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { Avatar } from '@/components'
import { UserStatistics } from '@/components/user-profile/user-statistics'
import { MobileUserProfileDescription, UserProfileType } from '@/modules'
import { Button, Typography } from '@/ui'
import Link from 'next/link'

import s from './user-profile-description.module.scss'

export const UserProfileDescription = ({ data, isMyProfile, totalCount }: UserProfileType) => {
  const { isMobile } = useMatchMedia()

  const { t } = useTranslation()
  const { profile } = t.profileSettings.generalSettings

  if (isMobile) {
    return <MobileUserProfileDescription />
  }

  return (
    <div className={s.container}>
      <div className={s.avatar}>
        <Avatar src={data?.avatars[0]?.url} />
      </div>

      <div className={s.profile}>
        <div className={s.header}>
          <div className={s.title}>
            <Typography as={'h1'} variant={'h1'}>
              {data?.userName || 'userURL'}
            </Typography>
            <CheckedIcon />
          </div>

          {isMyProfile && (
            <Button as={Link} href={menuNavigation.settings()} variant={'secondary'}>
              {profile.btn.label}
            </Button>
          )}
        </div>

        <UserStatistics totalCount={totalCount} />

        <Typography as={'p'} variant={'regular-16'}>
          {data?.aboutMe}
          <Typography as={'span'} variant={'regular-link'}>
            <Link href={'#'}>laboris nisi ut aliquip ex ea commodo consequat.</Link>
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
