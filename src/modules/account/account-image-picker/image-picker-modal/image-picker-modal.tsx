import React, { ReactElement, useEffect, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { toast } from 'react-toastify'

import { MIME_TYPES, useFileCreationWithSteps, useTranslation } from '@/app'
import { useLoadingSpinner } from '@/app/services/application/application.hooks'
import { useUploadAvatarMutation } from '@/app/services/profile/profile.api'
import { showError } from '@/app/utils'
import { Avatar, LoadingSpinner } from '@/components'
import { SliderZoom } from '@/components/image-slider/slider-zoom/slider-zoom'
import { Button, FileInput, Modal, Typography } from '@/ui'
import { clsx } from 'clsx'

import s from './image-picker-modal.module.scss'

type ImagePickerModalType = {
  error?: string
  isOpen: boolean
  onChange?: (open: boolean) => void
  onClose: () => void
  showModal?: boolean
}

export const ImagePickerModal = ({ isOpen, onClose }: ImagePickerModalType) => {
  const { startLoadingSpinner, stopLoadingSpinner } = useLoadingSpinner()
  const { blob, clearError, errorText, initialStepWithValidation, step, stepBackward, url } =
    useFileCreationWithSteps()
  const editorRef = useRef<AvatarEditor>(null)

  const [uploadFile] = useUploadAvatarMutation()

  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  const styles = clsx(!errorText && s.avatar)

  const onModalClose = () => {
    if (step === 2) {
      stepBackward()
    }

    onClose()
  }

  const uploadForm = (form: FormData) => {
    startLoadingSpinner({ isLoading: true, message: 'Uploading image...' })
    uploadFile(form)
      .unwrap()
      .then(() => toast.success('Image uploaded'))
      .catch(showError)
      .finally(() => {
        stopLoadingSpinner()
      })
  }

  const uploadAvatar = () => {
    const formData = new FormData()

    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas()

      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], 'avatar', { type: blob.type })

          formData.append('file', file)

          uploadForm(formData)

          stepBackward()
          onClose && onClose()
        }
      })
    } else {
      formData.append('file', blob as Blob)

      uploadForm(formData)

      stepBackward()
      onClose && onClose()
    }
  }

  const interfaceVariants: { [Key: string]: ReactElement } = {
    1: (
      <Interface1
        callback={initialStepWithValidation}
        error={errorText}
        styles={styles}
        url={url}
      />
    ),
    2: <Interface2 callback={uploadAvatar} editorRef={editorRef} url={url} />,
  }

  const CurrentInterface: ReactElement = interfaceVariants[step]

  useEffect(() => {
    clearError()
  }, [isOpen])

  return (
    <>
      <Modal onChange={onModalClose} open={isOpen}>
        <Modal.Content
          className={s.container}
          onInteractOutside={e => e.preventDefault()}
          title={modal.label}
        >
          {CurrentInterface}
        </Modal.Content>
      </Modal>
    </>
  )
}

type InterfaceType1 = {
  callback: (file: File) => void
  error?: string
  styles?: string
  url?: string
}

const Interface1 = ({ callback, error, styles, url }: InterfaceType1) => {
  const formRef = useRef<HTMLFormElement>(null)

  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  const { JPG, PNG } = MIME_TYPES

  const ErrorMessage = error && (
    <Typography className={s.error} variant={'regular-14'}>
      <b>Error!</b> {error}
    </Typography>
  )

  const handleUpload = () => {
    if (!formRef.current) {
      return
    }

    const { files } = formRef.current.file

    void callback(files[0])
  }

  return (
    <div className={s.content}>
      {ErrorMessage}

      <Avatar className={styles} height={228} rounded={false} src={''} width={222} />
      <FileInput
        accept={[JPG, PNG]}
        className={s.input}
        label={modal.btn.label}
        onUpload={handleUpload}
        ref={formRef}
      />
    </div>
  )
}

type InterfaceType2 = {
  callback: () => void
  editorRef: React.RefObject<AvatarEditor>
  url: string
}

const Interface2 = ({ callback, editorRef, url }: InterfaceType2) => {
  const { t } = useTranslation()
  const [sliderValue, setSliderValue] = useState<number>(1)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 })
  const { modal } = t.profileSettings.generalSettings.profileImage

  const handlePositionChange = (position: { x: number; y: number }) => {
    setPosition(position)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.preview}>
        <AvatarEditor
          backgroundColor={'black'}
          borderRadius={155}
          color={[23, 23, 23, 0.6]}
          crossOrigin={'anonymous'}
          disableBoundaryChecks={false}
          height={290}
          image={url}
          onPositionChange={handlePositionChange}
          position={position}
          ref={editorRef}
          scale={sliderValue}
          width={282}
        />
      </div>

      <SliderZoom isZoom setSliderValue={setSliderValue} sliderValue={sliderValue} />
      <Button className={s.btn} onClick={callback}>
        {modal.submitBtn.label}
      </Button>
    </div>
  )
}
