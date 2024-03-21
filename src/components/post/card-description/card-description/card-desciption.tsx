import React, { useState } from 'react'

import { menuNavigation } from '@/app/constants'
import { PostModel } from '@/app/services/posts/posts.types'
import { Avatar } from '@/components'
import { Typography } from '@/ui'
import { useRouter } from 'next/router'

import s from './card-description.module.scss'

export const CardDescription = ({
  avatarOwner,
  description,
  ownerId,
  userName,
}: Omit<PostModel, 'images'>) => {
  const [showMore, setShowMore] = useState(false)

  const { push } = useRouter()
  const collapseHandler = () => {
    setShowMore(!showMore)
  }
  const openUserProfileHandler = () => {
    void push(menuNavigation.profile(ownerId))
  }

  if (!description) {
    return null
  }

  return (
    <div className={s.description}>
      <div className={s.user} onClick={openUserProfileHandler}>
        <Avatar height={36} iconScale={0.6} src={avatarOwner} width={36} />
      </div>
      <div className={s.info} style={{ display: 'inline-block' }}>
        <Typography style={{ display: 'inline' }} variant={'bold-14'}>{`${userName} `}</Typography>

        <Typography style={{ display: 'inline' }} variant={'regular-14'}>
          {showMore ? description : `${description.substring(0, 90)}`}
        </Typography>
        {description.length > 90 && (
          <Typography
            as={'button'}
            className={s.button}
            onClick={collapseHandler}
            variant={'bold-14'}
          >
            {showMore ? 'Hide' : '. . .'}
          </Typography>
        )}
      </div>
    </div>
  )
}
