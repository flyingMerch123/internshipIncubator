import { useState } from 'react'

import { LikedIcon, UnlikedIcon } from '@/app'
import { Avatar, RepliedCommentType } from '@/components'
import { Typography } from '@/ui'
import { clsx } from 'clsx'

import s from '../comments-item/comments-item.module.scss'

export const RepliedCommentsItem = ({
  comment,
  createdAt,
  likes,
  url,
  userName = 'John Doe',
}: RepliedCommentType) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  return (
    <div className={s.wrapper}>
      <div className={s.user}>
        <Avatar height={36} iconScale={0.6} src={url} width={36} />

        <div className={s.comments}>
          <Typography as={'p'} variant={'regular-14'}>
            <Typography variant={'bold-14'}>{`${userName} `}</Typography>
            {comment}
          </Typography>

          <div className={s.info}>
            <Typography variant={'small'}>{createdAt}</Typography>

            {likes && <Typography variant={'small'}>{`Like: ${likes}`}</Typography>}

            <Typography className={s.replied} variant={'small'}>
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
