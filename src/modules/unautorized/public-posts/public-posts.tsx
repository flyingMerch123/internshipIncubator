import React, { memo } from 'react'

import { PublicPostsGetAll } from '@/app/services/public-posts/public-posts.types'
import { NumberOfUsers } from '@/modules/unautorized/number-of-users/number-of-users'
import { PostItem } from '@/modules/unautorized/posts-item/post-item'

import s from './public-posts.module.scss'

type Props = {
  data: PublicPostsGetAll
}

export const PublicPosts = memo(({ data }: Props) => {
  if (!data) {
    return null
  }

  return (
    <>
      <NumberOfUsers data={data} />
      <div className={s.posts}>
        {data?.items &&
          data?.items.length > 0 &&
          data?.items.map(item => (
            <div key={item.id}>
              <PostItem
                avatarOwner={item.avatarOwner}
                createdAt={item.createdAt}
                description={item.description}
                id={item.id}
                images={item.images}
                ownerId={item.ownerId}
                userName={item.userName}
              />
            </div>
          ))}
      </div>
    </>
  )
})
