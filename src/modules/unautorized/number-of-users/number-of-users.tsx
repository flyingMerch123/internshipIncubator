import React, { memo } from 'react'

import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { Typography } from '@/ui'

import s from './number-of-users.module.scss'

type Props = {
  data: PublicPostsGetAll
}

export const NumberOfUsers = memo(({ data }: Props) => {
  const users = String(data.totalUsers).padStart(6, '0').split('')

  return (
    <div className={s.main}>
      <Typography variant={'h2'}>Registered users:</Typography>
      <div className={s.counter}>
        {users.map((el, idx) => (
          <div className={s.digit} key={idx}>
            <Typography variant={'h2'}>{el}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
})
