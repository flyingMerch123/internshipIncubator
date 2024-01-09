import { clsx } from 'clsx'

import { MOCKED_DATA_STATISTICS } from './data'
import s from './user-statistics.module.scss'

import { useMatchMedia, useTranslation } from '@/app'
import { UserStatisticsItem } from '@/components'

type FetchedData = {
  category?: string
  qty?: number
}

type UserStatisticsProps = {
  data?: Array<FetchedData>
}

export const UserStatistics = ({ data = [] }: UserStatisticsProps) => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()
  const { following, followers, publications } = t.profileSettings.generalSettings.profile
  const styles = clsx(s.container, isMobile && s.mobile)

  return (
    <div className={styles}>
      <UserStatisticsItem category={following.label} qty={2218} />
      <UserStatisticsItem category={followers.label} qty={2851} />
      <UserStatisticsItem category={publications.label} qty={1742} />
    </div>
  )
}
