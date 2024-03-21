import React, { ReactElement, useEffect, useMemo, useState } from 'react'

import { useMatchMedia } from '@/app'
import { menuNavigation } from '@/app/constants'
import { PAGE_SIZE_PUBLIC_POSTS_BY_USER } from '@/app/constants/common'
import { COMMON_MODE_STATE, IMAGE_SIZE } from '@/app/constants/enums'
import { UserModel } from '@/app/services/auth/auth.api.types'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useGetPublicPostsByUserQuery } from '@/app/services/public-posts/public-posts.api'
import { PublicPostsGetPostsByUser } from '@/app/services/public-posts/public-posts.types'
import {
  EditModeInterface,
  GalleryItem,
  ImageSlider,
  PostCardModal,
  ViewModeInterface,
} from '@/components'
import { Loader } from '@/ui'
import { nanoid } from '@reduxjs/toolkit'
import { clsx } from 'clsx'

import s from './user-gallery.module.scss'

type InterfaceType = { [ViewMode: string]: ReactElement }

export const UserProfileGallery = ({
  isMyProfile,
  ownerId,
  user,
}: {
  isMyProfile: boolean
  ownerId: number
  user: UserModel | undefined
}) => {
  const { isMobile } = useMatchMedia()
  const styles = {
    card: clsx(s.card, isMobile && s.mobile),
    loader: clsx(s.card, isMobile && s.mobile, s.loader),
    root: clsx(s.container, isMobile && s.mobile),
  }
  const [endCursorPostId, setEndCursorPostId] = useState<number | undefined>()
  const { data, isFetching, isLoading } = useGetPublicPostsByUserQuery({
    endCursorPostId,
    pageSize: PAGE_SIZE_PUBLIC_POSTS_BY_USER,
    sortBy: 'createdAt',
    sortDirection: 'asc',
    userId: ownerId,
  })

  const [posts, setPosts] = useState<PublicPostsGetPostsByUser | undefined>()

  const {
    clearPostCardModal,
    closePostCardModal,
    isOpenPostCardModal,
    mode,
    openPostCardModal,
    selectedPost,
    setPostCardModalSelectedPost,
  } = usePostCardModal()

  const interfaces: InterfaceType = useMemo(() => {
    return {
      edit: (
        <EditModeInterface
          description={selectedPost?.description}
          postId={selectedPost?.id!}
          userName={selectedPost?.userName}
        />
      ),
      view: (
        <ViewModeInterface
          avatarOwner={selectedPost?.avatarOwner}
          createdAt={selectedPost?.createdAt}
          description={selectedPost?.description}
          isMyProfile={isMyProfile}
          userName={selectedPost?.userName}
        />
      ),
    }
  }, [
    isMyProfile,
    selectedPost?.avatarOwner,
    selectedPost?.createdAt,
    selectedPost?.description,
    selectedPost?.id,
    selectedPost?.userName,
  ])

  const CurrentInterface: ReactElement = interfaces[mode]

  const closePostModalHandler = () => {
    closePostCardModal()
    clearPostCardModal()
    window.history.pushState(null, 'post', menuNavigation.profile(ownerId))
  }

  const openPostModalHandler = (postId: number) => {
    const selectedPost = posts?.items.find(post => {
      return post.id === postId
    })

    selectedPost && setPostCardModalSelectedPost(selectedPost)
    openPostCardModal()
    window.history.pushState(null, 'post', menuNavigation.post(ownerId, postId))
  }

  useEffect(() => {
    if (!data) {
      return
    }
    // eslint-disable-next-line no-unsafe-optional-chaining
    const allPosts = new Set(posts?.items ? [...posts?.items, ...data.items] : [...data.items])
    const uniqPosts = [...allPosts]

    setPosts(prevState => {
      return prevState ? { ...prevState, ...data, items: uniqPosts } : { ...data }
    })
  }, [data])

  useEffect(() => {
    const hasScroll = document.body.scrollHeight !== window.innerHeight
    const stopRequest = posts?.items.length === posts?.totalCount

    const addMorePosts = () => {
      posts?.items[posts.items.length - 1]?.id &&
        setEndCursorPostId(posts.items[posts.items.length - 1].id)
    }

    if (!hasScroll && !isFetching) {
      addMorePosts()
    }
    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

      if (!stopRequest && scrolledToBottom && !isFetching) {
        addMorePosts()
      }
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [isFetching, posts])

  return (
    <>
      <div className={styles.root}>
        {posts?.items &&
          posts?.items.length > 0 &&
          posts?.items.map((item, index) => (
            <div className={styles.card} key={nanoid()}>
              <GalleryItem
                alt={`gallery image-${index}`}
                height={item.images[0].height}
                openPostModalHandler={openPostModalHandler}
                postId={item.id}
                src={item.images[0].url}
                width={item.images[0].width}
              />
            </div>
          ))}
      </div>
      <Loader isLoading={isLoading || isFetching} />
      <PostCardModal
        askConfirmation={mode === COMMON_MODE_STATE.EDIT}
        isOpen={isOpenPostCardModal || false}
        onChange={closePostModalHandler}
      >
        <ImageSlider
          aspectRatio={'1/1'}
          fitStyle={'cover'}
          images={selectedPost?.images.filter(image => image.imageSize === IMAGE_SIZE.MEDIUM)}
          isEditMode={mode === COMMON_MODE_STATE.EDIT}
          isMyProfile={isMyProfile}
          user={user}
        />
        {CurrentInterface}
      </PostCardModal>
      {/*<div className={styles.loader} ref={trigger} />*/}
    </>
  )
}
