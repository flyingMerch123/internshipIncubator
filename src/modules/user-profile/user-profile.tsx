import React, { useEffect } from 'react'

import { useRouter } from 'next/router'

import s from './user-profile.module.scss'

import { useDisclose, useRtkStateHook } from '@/app'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import {
  useGetProfileQuery,
  useGetPublicPostByIdQuery,
  useGetPublicPostsByUserQuery,
  useGetPublicUserProfileByIdQuery,
} from '@/app/services/profile/profile.api'
import { PublicUserModel, UserProfileModel } from '@/app/services/profile/profile.api.types'
import { ImageSlider, PostCardModal, UserProfileGallery, ViewModeInterface } from '@/components'
import { UserProfileDescription } from '@/modules'

export type UserProfileType = {
  data?: UserProfileModel | PublicUserModel
  isMyProfile: boolean
}

export const UserProfile = () => {
  const { data: user } = useGetMeQuery()
  const { query } = useRouter()
  const profileId = Number(query.id?.[0])
  const postId = Number(query.id?.[1])
  const isMyProfile = user?.userId === profileId

  const { data: posts } = useGetPublicPostsByUserQuery({
    userId: profileId,
    pageSize: 4,
  })
  const { data: authedUser } = useGetProfileQuery(undefined, { skip: !isMyProfile })
  const { data: publicUser } = useGetPublicUserProfileByIdQuery({ profileId })
  /*{ skip: isMyProfile }*/

  const { data: postById } = useGetPublicPostByIdQuery({ postId }, { skip: !postId })
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()

  const {
    _state: { post },
  } = useRtkStateHook()
  // @ts-ignore
  const isEditMode: boolean = post.mode === 'edit'

  // const currentData = isMyProfile ? authedUser : publicUser
  useEffect(() => {
    function handleScroll() {
      // Проверяем, долистал ли пользователь до низа страницы
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      ) {
        return
      }
      console.log('loading next page') // Вызываем функцию загрузки данных
    }

    // Добавляем обработчик события прокрутки после загрузки контента

    window.addEventListener('scroll', handleScroll)

    // Убираем обработчик события прокрутки при размонтировании компонента,
    // чтобы избежать утечек памяти
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (postId) {
      openModal()
    }
  }, [postId])

  const closePostModalHandler = () => {
    closeModal()
    window.history.pushState(null, 'post', `/user-profile/${postById?.ownerId}`)
  }

  return (
    <main className={s.container}>
      <UserProfileDescription data={publicUser} isMyProfile={isMyProfile} />
      <UserProfileGallery data={posts} userId={profileId} />
      <PostCardModal
        isOpen={isModalOpened}
        onChange={() => closePostModalHandler()}
        askConfirmation={isEditMode}
      >
        <ImageSlider images={postById?.images} aspectRatio={'1/1'} fitStyle={'cover'} />
        <ViewModeInterface
          description={postById?.description}
          userName={postById?.userName}
          createdAt={postById?.createdAt}
        />
      </PostCardModal>
    </main>
  )
}
