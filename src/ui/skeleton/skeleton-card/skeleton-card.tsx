import { PropsWithChildren } from 'react'

import { Skeleton } from '@/ui/skeleton/skeleton'

type SkeletonCardProps = {
  circle?: boolean
  className?: string
  count?: number
}
export const SkeletonCard = ({
  children,
  circle = false,
  className,
  count = 1,
}: PropsWithChildren<SkeletonCardProps>) => {
  const amount: Array<number> = Array(count).fill(1)

  return (
    <>
      {amount?.map((_, index) => (
        <Skeleton circle={circle} className={className} key={index}>
          {children}
        </Skeleton>
      ))}
    </>
  )
}
