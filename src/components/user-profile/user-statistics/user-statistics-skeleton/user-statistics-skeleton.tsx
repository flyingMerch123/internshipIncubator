import { UserStatisticsItem } from '@/components'
import { SkeletonCard } from '@/ui'

import s from './user-statistics-skeleton.module.scss'

import { MOCKED_DATA_STATISTICS } from '../data'

export const UserStatisticsSkeleton = () => {
  return (
    <div className={s.container}>
      {MOCKED_DATA_STATISTICS.map((_, index) => (
        <SkeletonCard key={`category-${index}`}>
          <UserStatisticsItem category={'category'} qty={1} />
        </SkeletonCard>
      ))}
    </div>
  )
}
