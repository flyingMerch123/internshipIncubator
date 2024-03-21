import { ReactElement, useMemo, useState } from 'react'

import { ErrorWithData, useDisclose, useFileCreationWithSteps, useTranslation } from '@/app'
import { useLoadingSpinner } from '@/app/services/application/application.hooks'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { useCreatePostMutation, useUploadImagePostMutation } from '@/app/services/posts/posts.api'
import { CreatePostRequestChildrenMetadata } from '@/app/services/posts/posts.types'
import { addImage, resetImagesToDefaultState } from '@/app/services/posts/slider.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'
import { showError } from '@/app/utils'
import {
  AddInterface,
  ConfirmationModal,
  CropInterface,
  DescriptionInterface,
  FilterInterface,
  LoadingSpinner,
  NewPostContainerModal,
  getCroppedAndFilteredImage,
} from '@/components'
import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'

import s from './create-new-post-modal.module.scss'

export const CreateNewPostModal = () => {
  const [addPost, { isLoading: isPostUploading }] = useCreatePostMutation()

  const [uploadImages] = useUploadImagePostMutation()
  const { t } = useTranslation()
  const { add, cropping, filters, publication } = t.createPost
  const { initialStepWithValidation, setPreferredStep, step, stepBackward, stepForward } =
    useFileCreationWithSteps(0, addImage, { sizeLimit: 5 })
  const { setIsLoading, stopLoadingSpinner } = useLoadingSpinner({
    active: isPostUploading,
    title: 'Saving...',
  })
  const {
    currentImageIndex,
    description: postDescription,
    images: selectedImages,
  } = useAppSelector(state => state.slider)

  const dispatch = useAppDispatch()

  const addNewPost = async () => {
    const formData = new FormData()

    setIsLoading({ isLoading: true })

    const imagePromises = selectedImages.map(async image => {
      const filteredImage = await getCroppedAndFilteredImage({
        filter: image.filter,
        imageSrc: image.url,
        pixelCrop: null,
      })

      if (!filteredImage?.unit8array) {
        return null
      }

      const blob = new Blob([filteredImage.unit8array], { type: 'image/jpeg' })

      formData.append(`file`, blob)

      return filteredImage
    })

    await Promise.all(imagePromises)

    uploadImages(formData)
      .unwrap()
      .then(res => {
        const imagesMetaData: CreatePostRequestChildrenMetadata[] = []

        res.images.map(image => {
          imagesMetaData.push({ uploadId: image.uploadId })
        })

        addPost({ childrenMetadata: imagesMetaData, description: postDescription })
        dispatch(resetImagesToDefaultState())
      })
      .catch((error: ErrorWithData) => {
        showError(error)
        setPreferredStep(2)
      })
      .finally(() => {
        stopLoadingSpinner()
      })
  }

  const interfaceVariants: { [Step: string]: ReactElement } = useMemo(() => {
    return {
      1: <AddInterface callback={initialStepWithValidation} />,
      2: <CropInterface images={selectedImages} />,
      3: <FilterInterface images={selectedImages} />,
      4: <DescriptionInterface images={selectedImages} />,
    }
  }, [selectedImages])

  const titleVariants: { [Step: string]: string } = useMemo(() => {
    return {
      1: add,
      2: cropping,
      3: filters,
      4: publication,
    }
  }, [])

  const CurrentInterface: ReactElement = interfaceVariants[step]
  const currentTitle: string = titleVariants[step]

  const { closeCreatePostModal: closeCreatePostModal, isOpen: isCreatePostModalOpen } =
    useCreatePostModal()
  const {
    isOpen: isConfirmationModalOpen,
    onClose: closeConfirmationModal,
    onOpen: openConfirmationModal,
  } = useDisclose()

  const handleOutsideClick = (e: FocusOutsideEvent | PointerDownOutsideEvent) => {
    e.preventDefault()
    openConfirmationModal()
  }
  const onConfirm = () => {
    closeCreatePostModal()
    setPreferredStep(1)

    dispatch(resetImagesToDefaultState())
  }

  return (
    <>
      <NewPostContainerModal onChange={closeCreatePostModal} open={isCreatePostModalOpen}>
        <NewPostContainerModal.Button asChild />
        <NewPostContainerModal.Content
          addNewPost={addNewPost}
          className={step < 3 ? s.content : s.filters}
          currentStep={step}
          onInteractOutside={handleOutsideClick}
          stepBackward={stepBackward}
          stepForward={stepForward}
          title={currentTitle}
        >
          {CurrentInterface}
        </NewPostContainerModal.Content>
      </NewPostContainerModal>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        message={'Are you sure you want to close ?'}
        onClose={closeConfirmationModal}
        onConfirmation={onConfirm}
        title={'Close create posts'}
      />
    </>
  )
}

export default CreateNewPostModal
