import React, { useState } from 'react'

import { clsx } from 'clsx'
import Image from 'next/image'

import s from './image-slider.module.scss'

import { ChevronLeft, ChevronRight } from '@/app'
import { ImageSliderProps } from '@/components/image-slider/image-slider-types'

const ImageSlider = ({ onClick, images, aspectRatio, fitStyle, size = 500 }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) return 0

      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) return images.length - 1

      return index - 1
    })
  }

  {
    /*@TODO:make aspectRatio as typed prop like 'landscape' | 'portrait' */
  }

  return (
    <div
      className={s.container}
      style={{
        maxWidth: `${size}px`,
        aspectRatio: `${aspectRatio}`,
      }}
    >
      <div className={s.images}>
        {images.map(image => {
          const onClickHandler = () => {
            onClick && onClick(image.id)
          }

          return (
            <Image
              style={{ translate: `${-100 * imageIndex}%` }}
              key={image.id}
              className={clsx(s.imageSlider, s[fitStyle])}
              src={image.url}
              alt={image.alt}
              onClick={onClickHandler}
            />
          )
        })}
      </div>
      {images.length > 1 && (
        <>
          <button className={s.buttonSlider} style={{ left: '0' }} onClick={showPrevImage}>
            <div className={s.icon}>
              <ChevronLeft />
            </div>
          </button>
          <button className={s.buttonSlider} style={{ right: '0' }} onClick={showNextImage}>
            <div className={s.icon}>
              <ChevronRight />
            </div>
          </button>
          <div className={s.dotButtons}>
            {images.map((_, index) => {
              return (
                <button key={index} className={s.dotButton} onClick={() => setImageIndex(index)}>
                  <div className={clsx(s.dot, index === imageIndex && s.isActive)}></div>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default ImageSlider
