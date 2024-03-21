import React, { useState } from 'react'

import { setActiveImageFilter } from '@/app/services/posts/slider.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import { ImageSliderControls, ImageSliderType, SelectedImages } from '@/components'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider-with-filters.module.scss'

export const ImageSliderWithFilters = ({
  aspectRatio,
  fitStyle,
  height,
  images,
  width,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const dispatch = useAppDispatch()

  if (!images) {
    return null
  }

  const { uploadId, url } = images[imageIndex]

  const onFilterChange = (filter: string) => {
    dispatch(setActiveImageFilter({ filter, id: uploadId }))
  }

  return (
    <div
      className={s.container}
      style={{
        aspectRatio,
        height,
        width,
      }}
    >
      <div className={s.images}>
        {images?.map(image => (
          <div
            className={clsx(s.imageSlider, s[fitStyle])}
            key={image.uploadId}
            style={{ filter: image.filter, translate: `${-100 * imageIndex}%` }}
          >
            <Image
              alt={image.alt || `img-${image.uploadId}`}
              fill
              objectFit={fitStyle}
              src={image.url}
            />
          </div>
        ))}
      </div>

      <ImageSliderControls
        imageIndex={imageIndex}
        images={images}
        isModified
        setImageIndex={setImageIndex}
      />

      <div className={s.filters}>
        <SelectedImages setActiveFilter={onFilterChange} url={url} />
      </div>
    </div>
  )
}
