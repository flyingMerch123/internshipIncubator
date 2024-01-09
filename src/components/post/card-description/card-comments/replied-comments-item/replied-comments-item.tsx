import { useState } from 'react'

import { clsx } from 'clsx'

import s from '../comments-item/comments-item.module.scss'

import { LikedIcon, UnlikedIcon } from '@/app'
import { Avatar, RepliedCommentType } from '@/components'
import { Typography } from '@/ui'

export const RepliedCommentsItem = ({
  url,
  userName = 'John Doe',
  comment,
  likes,
  createdAt,
}: RepliedCommentType) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  return (
    <div className={s.wrapper}>
      <div className={s.user}>
        <Avatar src={url} width={36} height={36} iconScale={0.6} />

        <div className={s.comments}>
          <Typography as={'p'} variant={'regular-14'}>
            <Typography variant={'bold-14'}>{`${userName} `}</Typography>
            {comment}
          </Typography>

          <div className={s.info}>
            <Typography variant={'small'}>{createdAt}</Typography>

            {likes && <Typography variant={'small'}>{`Like: ${likes}`}</Typography>}

            <Typography variant={'small'} className={s.replied}>
              Answer
            </Typography>
          </div>
        </div>

        <button onClick={() => setIsLiked(prev => !prev)}>
          {isLiked ? <LikedIcon /> : <UnlikedIcon />}
          <div className={clsx(isLiked && s.liked)} />
        </button>
      </div>
    </div>
  )
}
