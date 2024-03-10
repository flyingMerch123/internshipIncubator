import React, { ReactElement, useEffect, useMemo, useState } from 'react'

import { nanoid } from '@reduxjs/toolkit'
import { clsx } from 'clsx'

import s from './user-gallery.module.scss'

import { useDisclose, useMatchMedia, useRtkStateHook } from '@/app'
import { menuNavigation } from '@/app/constants'
import { PAGE_SIZE_PUBLIC_POSTS_BY_USER } from '@/app/constants/common'
import { COMMON_MODE_STATE, IMAGE_SIZE } from '@/app/constants/enums'
import { UserModel } from '@/app/services/auth/auth.api.types'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useGetPublicPostsByUserQuery } from '@/app/services/public-posts/public-posts.api'
import {
  PostViewModel,
  PublicPostsGetPostsByUser,
} from '@/app/services/public-posts/public-posts.types'
import {
  EditModeInterface,
  GalleryItem,
  ImageSlider,
  PostCardModal,
  ViewModeInterface,
} from '@/components'
import { Loader } from '@/ui'

type InterfaceType = { [ViewMode: string]: ReactElement }

export const UserProfileGallery = ({
  ownerId,
  isMyProfile,
  user,
}: {
  user: UserModel | undefined
  ownerId: number
  isMyProfile: boolean
}) => {
  const { isMobile } = useMatchMedia()
  const styles = {
    root: clsx(s.container, isMobile && s.mobile),
    card: clsx(s.card, isMobile && s.mobile),
    loader: clsx(s.card, isMobile && s.mobile, s.loader),
  }
  const [endCursorPostId, setEndCursorPostId] = useState<number | undefined>()
  const { data, isLoading, isFetching } = useGetPublicPostsByUserQuery({
    userId: ownerId,
    pageSize: PAGE_SIZE_PUBLIC_POSTS_BY_USER,
    endCursorPostId,
    sortDirection: 'asc',
    sortBy: 'createdAt',
  })

  const [posts, setPosts] = useState<PublicPostsGetPostsByUser | undefined>()

  const {
    mode,
    isOpenPostCardModal,
    openPostCardModal,
    closePostCardModal,
    setPostCardModalSelectedPost,
    selectedPost,
    clearPostCardModal,
  } = usePostCardModal()

  const interfaces: InterfaceType = useMemo(() => {
    return {
      view: (
        <ViewModeInterface
          userName={selectedPost?.userName}
          isMyProfile={isMyProfile}
          description={selectedPost?.description}
          createdAt={selectedPost?.createdAt}
          avatarOwner={selectedPost?.avatarOwner}
        />
      ),
      edit: (
        <EditModeInterface
          userName={selectedPost?.userName}
          postId={selectedPost?.id!}
          description={selectedPost?.description}
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
            <div key={nanoid()} className={styles.card}>
              <GalleryItem
                src={item.images[0].url}
                width={item.images[0].width}
                height={item.images[0].height}
                alt={`gallery image-${index}`}
                postId={item.id}
                openPostModalHandler={openPostModalHandler}
              />
            </div>
          ))}
      </div>
      <Loader isLoading={isLoading || isFetching} />
      <PostCardModal
        isOpen={isOpenPostCardModal || false}
        onChange={closePostModalHandler}
        askConfirmation={mode === COMMON_MODE_STATE.EDIT}
      >
        <ImageSlider
          images={selectedPost?.images.filter(image => image.imageSize === IMAGE_SIZE.MEDIUM)}
          aspectRatio={'1/1'}
          fitStyle={'cover'}
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
