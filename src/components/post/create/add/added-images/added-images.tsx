import { CloseIcon } from '@/app'
import { useRtkStateHook } from '@/app/hooks/useRtkState.hook'
import { deleteImage, setCurrentImageIndex } from '@/app/services/posts/slider.slice'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './added-images.module.scss'

export const AddedImages = () => {
  const { _dispatch, _state } = useRtkStateHook()
  const { images: selectedImages } = _state.slider

  const onDeleteImage = ({ id }: { id: string }) => {
    _dispatch(deleteImage({ id }))
  }

  const chooseImageByClick = (index: number) => {
    _dispatch(setCurrentImageIndex({ index }))
  }

  const styles = clsx(s.hide, selectedImages.length > 1 && s.close)

  return (
    <>
      {
        // @ts-ignore
        selectedImages.map((image, index) => (
          <div
            className={s.addedPhoto}
            key={image.uploadId}
            onClick={() => chooseImageByClick(index)}
          >
            <CloseIcon
              className={styles}
              height={12}
              // @ts-ignore
              onClick={() => onDeleteImage({ id: image.id })}
              width={12}
            />

            <Image
              alt={image.alt || `image-${image.uploadId}`}
              height={82}
              src={image.url}
              width={80}
            />
          </div>
        ))
      }
    </>
  )
}
