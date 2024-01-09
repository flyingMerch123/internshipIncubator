import { useState } from 'react'

import { clsx } from 'clsx'

import s from './comments-list.module.scss'

import { CardDescription, CommentsItem, POST_COMMENTS, PostType } from '@/components'
import { Typography } from '@/ui'

export const CommentsList = ({
  userName,
  description,
  url,
  createdAt,
  comments,
  cardType = 'xl',
}: PostType) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const isContentHidden = cardType === 'regular' && !isVisible

  const styles = {
    root: clsx(cardType === 'regular' && s.containerV2),
    comments: clsx(s.container, isContentHidden && s.hide, isVisible && s.show),
  }

  const handleClick = () => {
    if (!comments.length) return

    setIsVisible(visible => !visible)
  }

  return (
    <div className={styles.root}>
      {cardType === 'regular' && (
        <Typography as={'button'} variant={'bold-14'} className={s.btn} onClick={handleClick}>
          {comments?.length ? `Show all Comments (${comments?.length})` : 'No Comments'}
        </Typography>
      )}

      <div className={styles.comments}>
        {cardType === 'xl' && (
          <div className={s.wrapper}>
            <CardDescription
              userName={userName}
              url={url}
              description={description}
              createdAt={createdAt}
            />
          </div>
        )}

        {comments.length ? (
          comments?.map(comment => <CommentsItem key={comment.id} {...comment} />)
        ) : (
          <Typography as={'h2'} variant={'h2'}>
            No comments yet
          </Typography>
        )}
      </div>
    </div>
  )
}
