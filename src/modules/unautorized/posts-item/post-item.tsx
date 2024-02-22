import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './post-item.module.scss'

import { useDisclose } from '@/app'
import { menuNavigation } from '@/app/constants'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { Avatar, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'
import { Typography } from '@/ui'

type Props = {
  createdAt: string
  images: PostImageViewModel[]
  description: string
  userName: string
  itemId: number
  ownerId: number
  avatarOwner?: string
}

export const PostItem = ({
  createdAt,
  images,
  description,
  userName,
  itemId,
  ownerId,
  avatarOwner,
}: Props) => {
  const [showMore, setShowMore] = useState(false)
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const { push } = useRouter()
  const collapseHandler = () => {
    setShowMore(!showMore)
  }

  const openPostModalHandler = (itemId: number, ownerId: number) => {
    void push(menuNavigation.post(ownerId, itemId))
  }
  const closePostModalHandler = (ownerId: number) => {
    void push(menuNavigation.profile(ownerId))
  }

  const openUserProfileHandler = (ownerId: number) => {
    void push(menuNavigation.profile(ownerId))
  }

  const date = new Date(createdAt ? createdAt : '').toLocaleDateString('en-US', {
    year: 'numeric',
    day: '2-digit',
    month: 'long',
  })

  return (
    <>
      <div className={s.post}>
        <div
          className={`${s.photoBlock} ${showMore && s.collapsePhotoBlock}`}
          onClick={() => openPostModalHandler(itemId, ownerId)}
        >
          <Image
            className={`${s.imageBlock} ${showMore && s.collapseImageBlock}`}
            src={images[0].url}
            alt={'image'}
            width={234}
            height={240}
          />
        </div>
        <div className={s.header} onClick={() => openUserProfileHandler(ownerId)}>
          <Avatar width={36} height={36} src={avatarOwner} />
          <div className={s.footerInfo}>
            <Typography variant="h3">{userName}</Typography>
          </div>
        </div>
        <Typography className={s.status} variant={'small'}>
          {date}
        </Typography>
        <div>
          <Typography variant={'regular-14'}>
            {showMore ? description : `${description.substring(0, 90)}`}
          </Typography>
          {description.length > 90 && (
            <Typography
              as={'button'}
              variant={'regular-14'}
              className={s.button}
              onClick={collapseHandler}
            >
              {showMore ? 'Hide' : 'Show more'}
            </Typography>
          )}
        </div>
      </div>
      <PostCardModal isOpen={isModalOpened} onChange={() => closePostModalHandler(ownerId)}>
        <ImageSlider images={images} aspectRatio={'1/1'} fitStyle={'cover'} />
        <ViewModeInterface
          description={description}
          userName={userName}
          createdAt={createdAt}
          avatarOwner={avatarOwner}
        />
      </PostCardModal>
    </>
  )
}
