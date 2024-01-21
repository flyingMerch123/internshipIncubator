import { ChangeEvent, MutableRefObject, useRef } from 'react'

import { clsx } from 'clsx'

import s from './add-image.module.scss'

import { MIME_TYPES, PlusCircle, useFileCreationWithSteps } from '@/app'
import { addImage } from '@/app/services/post/slider.slice'
import { useAppSelector } from '@/app/store/rtk.types'
import { AddedImages } from '@/components'

export const AddImage = () => {
  const addRef = useRef() as MutableRefObject<HTMLDivElement>
  const inputRef = useRef<HTMLInputElement>(null)

  const { JPG, PNG } = MIME_TYPES
  const acceptedFormats: string = [JPG, PNG].join(', ')

  const sliderImages = useAppSelector(state => state.slider.images)

  const { initialStepWithValidation } = useFileCreationWithSteps(undefined, addImage, {
    sizeLimit: 5,
  })

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files) return

    initialStepWithValidation(files[0])
  }

  return (
    <>
      <div className={clsx(s.addContainer, sliderImages.length > 4 && s.scroll)} ref={addRef}>
        {!!sliderImages.length && <AddedImages />}

        {sliderImages.length < 10 && (
          <label id="cropper" className={s.label}>
            <PlusCircle />

            <input
              id="cropper"
              type="file"
              ref={inputRef}
              name="cover"
              onChange={handleImageUpload}
              accept={acceptedFormats}
            />
          </label>
        )}
      </div>
    </>
  )
}
