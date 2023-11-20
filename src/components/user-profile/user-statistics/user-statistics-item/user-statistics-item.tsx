import { Typography } from '@/ui'

type UserStatisticsItemProps = {
  category?: string
  qty?: number
}

export const UserStatisticsItem = ({ category, qty }: UserStatisticsItemProps) => {
  return (
    <div>
      <Typography as={'p'} variant={'regular-14'}>
        {qty}
      </Typography>
      <Typography as={'p'} variant={'regular-14'}>
        {category}
      </Typography>
    </div>
  )
}
