import React, { useState } from 'react'

import { useDisclose } from '@/app'
import { menuNavigation } from '@/app/constants'
import { date } from '@/app/helpers/customizeDate'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { Avatar, ImageSlider, PostCardModal, ViewModeInterface } from '@/components'
import { Typography } from '@/ui'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './post-item.module.scss'

type Props = {
  avatarOwner?: string
  createdAt: string
  description: string
  id: number
  images: PostImageViewModel[]
  ownerId: number
  userName: string
}

export const PostItem = ({
  avatarOwner,
  createdAt,
  description,
  id,
  images,
  ownerId,
  userName,
}: Props) => {
  const [showMore, setShowMore] = useState(false)
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const { push } = useRouter()
  const collapseHandler = () => {
    setShowMore(!showMore)
  }

  const openPostModalHandler = () => {
    void push(menuNavigation.post(ownerId, id))
  }
  const closePostModalHandler = () => {
    void push(menuNavigation.profile(ownerId))
  }

  const openUserProfileHandler = () => {
    void push(menuNavigation.profile(ownerId))
  }

  return (
    <>
      <div className={s.post}>
        <div
          className={`${s.photoBlock} ${showMore && s.collapsePhotoBlock}`}
          onClick={openPostModalHandler}
        >
          <Image
            alt={'image'}
            className={`${s.imageBlock} ${showMore && s.collapseImageBlock}`}
            height={240}
            src={images[0]?.url}
            width={234}
          />
        </div>
        <div className={s.header} onClick={openUserProfileHandler}>
          <Avatar height={36} src={avatarOwner} width={36} />
          <div className={s.footerInfo}>
            <Typography variant={'h3'}>{userName}</Typography>
          </div>
        </div>
        <Typography className={s.status} variant={'small'}>
          {date(createdAt)}
        </Typography>
        <div>
          <Typography variant={'regular-14'}>
            {showMore ? description : `${description.substring(0, 90)}`}
          </Typography>
          {description.length > 90 && (
            <Typography
              as={'button'}
              className={s.button}
              onClick={collapseHandler}
              variant={'regular-14'}
            >
              {showMore ? 'Hide' : 'Show more'}
            </Typography>
          )}
        </div>
      </div>
      <PostCardModal isOpen={isModalOpened} onChange={closePostModalHandler}>
        <ImageSlider aspectRatio={'1/1'} fitStyle={'cover'} images={images} />
        <ViewModeInterface
          avatarOwner={avatarOwner}
          createdAt={createdAt}
          description={description}
          id={id}
          ownerId={ownerId}
          userName={userName}
        />
      </PostCardModal>
    </>
  )
}
