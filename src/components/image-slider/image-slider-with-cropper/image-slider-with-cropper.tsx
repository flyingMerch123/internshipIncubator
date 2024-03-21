import React, { useEffect, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

import { useRtkStateHook } from '@/app/hooks/useRtkState.hook'
import { addCroppedImage } from '@/app/services/posts/slider.slice'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { CropperMenu, ImageSliderContainer, getCroppedAndFilteredImage } from '@/components'
import { clsx } from 'clsx'

import s from '../image-slider.module.scss'

type ImageSliderType = {
  aspectRatio: number
  fitStyle: 'contain' | 'cover'
  images?: PostImageViewModel[]
  setAspectRatio: (aspectRatio: number) => void
}
export const ImageSliderWithCropper = ({
  aspectRatio,
  fitStyle,
  images = [],
  setAspectRatio,
}: ImageSliderType) => {
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState<number>(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const { _dispatch, _state } = useRtkStateHook()
  const { currentImageIndex: globalImageIndex } = _state.slider

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }
  //TODO as unknown as string was added to fix TS Error
  const onCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedAndFilteredImage({
        imageSrc: images[imageIndex].url,
        pixelCrop: croppedAreaPixels,
      })

      if (croppedImage?.objectUrl) {
        _dispatch(addCroppedImage({ croppedImage: croppedImage.objectUrl, index: imageIndex }))
      }
    }
  }

  useEffect(() => {
    if (imageIndex > images?.length - 1) {
      setImageIndex(images.length - 1)
    }

    if (zoom > 1) {
      setZoom(1)
    }
  }, [images, imageIndex])

  useEffect(() => {
    if (globalImageIndex !== imageIndex) {
      setImageIndex(globalImageIndex)
    }
  }, [globalImageIndex])

  return (
    <>
      <ImageSliderContainer imageIndex={imageIndex} images={images} setImageIndex={setImageIndex}>
        <div
          className={clsx(s.imageSlider, s.transition, s[fitStyle], s.container)}
          key={images[imageIndex]?.uploadId}
        >
          <Cropper
            aspect={aspectRatio}
            crop={crop}
            image={images[imageIndex]?.url || ''}
            objectFit={'contain'}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            showGrid={false}
            zoom={zoom}
            zoomWithScroll
          />
        </div>

        <CropperMenu
          onCrop={onCrop}
          setAspectRatio={setAspectRatio}
          setZoom={setZoom}
          zoom={zoom}
        />
      </ImageSliderContainer>
    </>
  )
}
