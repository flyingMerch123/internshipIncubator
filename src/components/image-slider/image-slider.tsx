import React, { useState } from 'react'

import { CloseIcon } from '@/app'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useDeleteImagePostMutation } from '@/app/services/posts/posts.api'
import { ImageSliderContainer, ImageSliderType } from '@/components'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider.module.scss'

export const ImageSlider = ({
  aspectRatio,
  fitStyle,
  height,
  images = [],
  isEditMode,
  isMyProfile,
  user,
  width,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [deletePostImage] = useDeleteImagePostMutation()
  const { updatePostImages } = usePostCardModal()
  const handleDeletePostImage = (uploadId: string) => {
    deletePostImage({ uploadId })
      .unwrap()
      .then(() => {
        const updatedImages = images.filter(image => {
          return image.uploadId !== uploadId
        })

        updatePostImages(updatedImages)
      })
      .catch(error => {
        console.error(`${error}`)
      })
      .finally()
  }

  return (
    <ImageSliderContainer
      aspectRatio={aspectRatio}
      height={height}
      imageIndex={imageIndex}
      images={images}
      isEditMode={isEditMode}
      setImageIndex={setImageIndex}
      width={width}
    >
      {images.map((image, index) => (
        <div
          className={clsx(s.imageSlider, s[fitStyle])}
          key={image.url}
          style={{
            filter: image.filter,
            translate: `${-100 * imageIndex}%`,
          }}
        >
          {isEditMode && user && isMyProfile && images.length > 1 && (
            <CloseIcon className={s.delete} onClick={() => handleDeletePostImage(image.uploadId)} />
          )}
          <Image alt={'image'} fill objectFit={fitStyle} src={image.url} />
        </div>
      ))}
    </ImageSliderContainer>
  )
}
