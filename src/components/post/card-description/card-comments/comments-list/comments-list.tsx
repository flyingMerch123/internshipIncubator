import { useState } from 'react'

import { CommentsType } from '@/app/services/posts/posts.types'
import { CardDescription } from '@/components'

import s from './comments-list.module.scss'

export const CommentsList = ({ avatarOwner, createdAt, description, userName }: CommentsType) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  /* const isContentHidden = cardType === 'regular' && !isVisible

      const styles = {
        root: clsx(cardType === 'regular' && s.containerV2),
        comments: clsx(s.container, isContentHidden && s.hide, isVisible && s.show),
      }

      if (!content) {
        return null
      }

      const handleClick = () => {
        if (cotent.length) {
          setIsVisible(visible => !visible)
        }
      }*/

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <CardDescription
          avatarOwner={avatarOwner}
          createdAt={createdAt}
          description={description}
          userName={userName}
        />
      </div>
      {/*{cardType === 'regular' && (
        <Typography as={'button'} variant={'bold-14'} className={s.btn} onClick={handleClick}>
          {comments?.length ? `Show all Comments (${comments?.length})` : 'No Comments'}
        </Typography>
      )}

      <div className={styles.comments}>
        {cardType === 'xl' && (
          <div className={s.wrapper}>
            <CardDescription
              userName={userName}
              avatarOwner={avatarOwner}
              description={description}
              createdAt={createdAt}
            />
          </div>
        )}

        {comments?.length ? (
          comments?.map(comment => <CommentsItem key={comment.id} {...comment} />)
        ) : (*/}
      {/*  <Typography as={'h2'} variant={'h2'}>
        No comments yet
      </Typography>*/}
      {/* )}
      </div>*/}
    </div>
  )
}
