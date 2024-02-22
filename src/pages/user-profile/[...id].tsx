import React from 'react'

import { getRunningQueriesThunk } from '@/app/services/common/common.api'
import { getPublicUserProfileById } from '@/app/services/profile/profile.api'
import {
  getPublicPostById,
  getPublicPostsByUser,
} from '@/app/services/public-posts/public-posts.api'
import { wrapper } from '@/app/store/store'
import { UserProfile } from '@/modules/user-profile'

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  const query = context.query

  const profileId = Number(query.id?.[0])
  const postId = Number(query.id?.[1])

  store.dispatch(getPublicUserProfileById.initiate({ profileId }, { forceRefetch: true }))
  store.dispatch(
    getPublicPostsByUser.initiate({ userId: profileId, pageSize: 4 }, { forceRefetch: true })
  )
  store.dispatch(getPublicPostById.initiate({ postId }, { forceRefetch: true }))

  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
  }
})

const UserProfilePage = () => {
  return <UserProfile />
}

export default UserProfilePage
