import React, { useEffect } from 'react'

import { PAGE_SIZE_PUBLIC_POSTS_BY_USER } from '@/app/constants/common'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useGetPublicUserProfileByIdQuery } from '@/app/services/profile/profile.api'
import { PublicUserModel, UserProfileModel } from '@/app/services/profile/profile.api.types'
import {
  useGetPublicPostByIdQuery,
  useGetPublicPostsByUserQuery,
} from '@/app/services/public-posts/public-posts.api'
import { UserProfileGallery } from '@/components'
import { UserProfileDescription } from '@/modules'
import { useRouter } from 'next/router'

import s from './user-profile.module.scss'

export type UserProfileType = {
  data?: PublicUserModel | UserProfileModel
  isMyProfile: boolean
  totalCount?: number
}

export const UserProfile = () => {
  const { data: user } = useGetMeQuery()
  const { query } = useRouter()
  const profileId = Number(query.id?.[0])
  const postId = Number(query.id?.[1])

  const isMyProfile = user?.userId === profileId
  const { data: postById } = useGetPublicPostByIdQuery({ postId }, { skip: !postId })
  const { data: publicUser } = useGetPublicUserProfileByIdQuery({ profileId })
  const { data: posts } = useGetPublicPostsByUserQuery({
    pageSize: PAGE_SIZE_PUBLIC_POSTS_BY_USER,
    sortBy: 'createdAt',
    sortDirection: 'asc',
    userId: profileId,
  })

  const { openPostCardModal, setPostCardModalSelectedPost } = usePostCardModal()

  useEffect(() => {
    if (postId && postById) {
      setPostCardModalSelectedPost(postById)
      openPostCardModal()
    }
  }, [postId])

  return (
    <main className={s.container}>
      <UserProfileDescription
        data={publicUser}
        isMyProfile={isMyProfile}
        totalCount={posts?.totalCount}
      />
      <UserProfileGallery isMyProfile={isMyProfile} ownerId={profileId} user={user} />
    </main>
  )
}
