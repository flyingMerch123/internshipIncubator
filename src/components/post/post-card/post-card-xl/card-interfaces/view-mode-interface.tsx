import { PostModel } from '@/app/services/posts/posts.types'
import { AddComment, CardHeader, CardInformation, CardOptions, CommentsList } from '@/components'

import s from '@/components/post/post-card/post-card-xl/post-card-xl.module.scss'

export const ViewModeInterface = ({
  avatarOwner,
  createdAt,
  description,
  id,
  isMyProfile,
  ownerId,
  userName,
}: Omit<PostModel, 'images'>) => {
  return (
    <div className={s.card}>
      <CardHeader
        avatarOwner={avatarOwner}
        createdAt={createdAt}
        description={description}
        id={id}
        isMyProfile={isMyProfile}
        ownerId={ownerId}
        userName={userName}
      />
      <CommentsList
        avatarOwner={avatarOwner}
        createdAt={createdAt}
        description={description}
        userName={userName}
      />
      <CardOptions />
      <CardInformation createdAt={createdAt} />
      <AddComment />
    </div>
  )
}
