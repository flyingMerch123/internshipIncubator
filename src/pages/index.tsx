import React from 'react'

import { authNavigationUrls } from '@/app/constants'
import { PAGE_SIZE_PUBLIC_POSTS_BY_USER } from '@/app/constants/common'
import { IMAGE_SIZE } from '@/app/constants/enums'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { getRunningQueriesThunk } from '@/app/services/common/common.api'
import {
  getPublicPosts,
  useGetPublicPostsQuery,
} from '@/app/services/public-posts/public-posts.api'
import { wrapper } from '@/app/store/store'
import { LoadingSpinner, POST_COMMENTS, PostCard, PostCardXL } from '@/components'
import { useRouter } from 'next/router'

/*export const getStaticProps = async () => {
  const params = {
    pageSize: '4',
    sortDirection: 'desc',
    sortBy: 'createdAt',
  }
  const queryParams = new URLSearchParams(params).toString()
  const response = await fetch(`https://inctagram.work/api/v1/public-posts/all/?${queryParams}`)
  const posts: PublicPostsGetAll = await response.json()

  return {
    props: { posts },
    revalidate: 60,
  }
}*/

export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  store.dispatch(
    getPublicPosts.initiate(
      {
        pageSize: PAGE_SIZE_PUBLIC_POSTS_BY_USER,
        sortBy: 'createdAt',
        sortDirection: 'asc',
      },
      { forceRefetch: true }
    )
  )

  await Promise.all(store.dispatch(getRunningQueriesThunk()))

  return {
    props: {},
  }
})
const Home = (/*{ posts }: InferGetStaticPropsType<typeof getStaticProps>*/) => {
  const { data: me, isLoading } = useGetMeQuery()
  const { push } = useRouter()
  const { data: posts } = useGetPublicPostsQuery({
    pageSize: 4,
    sortBy: 'createdAt',
    sortDirection: 'desc',
  })

  if (isLoading) {
    return <LoadingSpinner isLoading={isLoading} />
  }

  if (!me) {
    void push(authNavigationUrls.signIn())
  }

  return (
    me && (
      <>
        {posts?.items?.map((item, index) => {
          const filteredImages = item.images.filter(image => image.imageSize === IMAGE_SIZE.MEDIUM)

          return (
            <div key={item.id}>
              <PostCard
                avatarOwner={item.avatarOwner}
                createdAt={item.createdAt}
                description={item.description}
                id={item.id}
                images={filteredImages}
                //comments={POST_COMMENTS?.comments}
                ownerId={item.ownerId}
                userName={item.userName}
              />
            </div>
          )
        })}

        {/* <h2 style={{ marginBottom: '1em', textAlign: 'center' }}>Friend Account</h2>
        <PostCard
          cardType={'regular'}
          url={POST_COMMENTS.url}
          userName={'Darius'}
          account={'friend'}
          description={''}
          comments={[]}
          postdId={'22'}
        />*/}

        <h2 style={{ margin: '1em', textAlign: 'center' }}>
          Personal Account (Post Details/Editing)
        </h2>
        <PostCardXL {...POST_COMMENTS} isLoading={isLoading} />
      </>
    )
  )
}

export default Home
