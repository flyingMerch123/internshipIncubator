import { useMatchMedia, useTranslation } from '@/app'
import { UserStatisticsItem } from '@/components'
import { clsx } from 'clsx'

import s from './user-statistics.module.scss'

type FetchedData = {
  category?: string
  qty?: number
}

type UserStatisticsProps = {
  data?: Array<FetchedData>
  totalCount?: number
}

export const UserStatistics = ({ data = [], totalCount }: UserStatisticsProps) => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()
  const { followers, following, publications } = t.profileSettings.generalSettings.profile
  const styles = clsx(s.container, isMobile && s.mobile)

  return (
    <div className={styles}>
      <UserStatisticsItem category={following.label} qty={2218} />
      <UserStatisticsItem category={followers.label} qty={2851} />
      <UserStatisticsItem category={publications.label} qty={totalCount} />
    </div>
  )
}
