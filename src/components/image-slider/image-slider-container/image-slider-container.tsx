import { CSSProperties, PropsWithChildren } from 'react'

import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { ImageSliderControls, SliderControlsType } from '@/components'

import s from './image-slider-container.module.scss'

type ImageSliderContainerType = PropsWithChildren<
  {
    aspectRatio?: CSSProperties['aspectRatio']
    height?: CSSProperties['height']
    images: PostImageViewModel[]
    width?: CSSProperties['width']
  } & Pick<SliderControlsType, 'imageIndex' | 'isEditMode' | 'setImageIndex'>
>
export const ImageSliderContainer = ({
  aspectRatio,
  children,
  height,
  imageIndex,
  images,
  isEditMode,
  setImageIndex,
  width,
}: ImageSliderContainerType) => {
  return (
    <div
      className={s.container}
      style={{
        aspectRatio,
        height,
        width,
      }}
    >
      <div className={s.images}>{children}</div>

      <ImageSliderControls
        imageIndex={imageIndex}
        images={images}
        isEditMode={isEditMode}
        setImageIndex={setImageIndex}
      />
    </div>
  )
}
