import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider.module.scss'

import { CloseIcon } from '@/app'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useDeleteImagePostMutation } from '@/app/services/posts/posts.api'
import { ImageSliderContainer, ImageSliderType } from '@/components'

export const ImageSlider = ({
  images = [],
  width,
  height,
  fitStyle,
  aspectRatio,
  isEditMode,
  user,
  isMyProfile,
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
      images={images}
      width={width}
      height={height}
      aspectRatio={aspectRatio}
      imageIndex={imageIndex}
      setImageIndex={setImageIndex}
      isEditMode={isEditMode}
    >
      {images.map((image, index) => (
        <div
          key={image.url}
          style={{
            translate: `${-100 * imageIndex}%`,
            filter: image.filter,
          }}
          className={clsx(s.imageSlider, s[fitStyle])}
        >
          {isEditMode && user && isMyProfile && images.length > 1 && (
            <CloseIcon className={s.delete} onClick={() => handleDeletePostImage(image.uploadId)} />
          )}
          <Image objectFit={fitStyle} fill src={image.url} alt={'image'} />
        </div>
      ))}
    </ImageSliderContainer>
  )
}
