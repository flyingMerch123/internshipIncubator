import { useState } from 'react'

import { clsx } from 'clsx'

import s from './comments-item.module.scss'

import { LikedIcon, UnlikedIcon } from '@/app'
import { Avatar, CommentType, RepliedCommentsList } from '@/components'
import { Typography } from '@/ui'

export const CommentsItem = ({
  url,
  userName = 'URLProfile',
  comment,
  likes,
  replies,
  createdAt,
}: CommentType) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isOpened, setIsOpened] = useState<boolean>(false)

  return (
    <div className={s.container}>
      <div className={s.user}>
        <Avatar src={url} width={36} height={36} iconScale={0.6} />

        <div className={s.comments}>
          <div className={s.comment}>
            <Typography as={'p'} variant={'regular-14'}>
              <Typography variant={'bold-14'}>{`${userName} `}</Typography>
              {comment}
            </Typography>

            <button onClick={() => setIsLiked(prev => !prev)}>
              {isLiked ? <LikedIcon /> : <UnlikedIcon />}
              <div className={clsx(isLiked && s.liked)} />
            </button>
          </div>

          <div className={s.info}>
            <Typography variant={'small'}>{createdAt}</Typography>

            {likes && <Typography variant={'small'}>{`Like: ${likes}`}</Typography>}

            <Typography as={'button'} variant={'small'} className={s.replied}>
              Answer
            </Typography>
          </div>

          {replies && (
            <div className={clsx(s.content, isOpened && s.fade)}>
              <>
                <Typography
                  as={'button'}
                  variant={'small'}
                  onClick={() => {
                    setIsOpened(prev => !prev)
                  }}
                  className={s.replied}
                >
                  {`----- ${isOpened ? 'Hide' : 'Show'} Answers(${replies.length})`}
                </Typography>

                {isOpened && <RepliedCommentsList replies={replies} />}
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
