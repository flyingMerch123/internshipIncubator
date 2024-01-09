import { useEffect, useRef, useState } from 'react'

import * as Slider from '@radix-ui/react-slider'
import { clsx } from 'clsx'
import AvatarEditor from 'react-avatar-editor'

import s from './image-picker-modal.module.scss'
import { useImageValidation } from './useImageValidation'

import { MIME_TYPES, useTranslation } from '@/app'
import { useUploadAvatarMutation } from '@/app/services/profile/profile.api'
import { Avatar, LoaderV2 } from '@/components'
import { SliderComponent } from '@/components/slider-for-zoom/slider-component'
import { Button, FileInput, Modal, Typography } from '@/ui'

type ImagePickerModalType = {
  error?: string
  showModal?: boolean
  onChange?: (open: boolean) => void
  isOpen: boolean
  onClose?: () => void
}

export const ImagePickerModal = ({ isOpen, onChange, onClose }: ImagePickerModalType) => {
  const { url, step, stepUp, stepBack, errorText, clearError, blob } = useImageValidation()
  const editorRef = useRef<AvatarEditor>(null)

  const [uploadFile, { isLoading: isUploading }] = useUploadAvatarMutation()

  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  const styles = clsx(!errorText && s.avatar)

  const uploadAvatar = () => {
    const formData = new FormData()

    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas()

      canvas.toBlob(blob => {
        if (blob) {
          const file = new File([blob], 'avatar', { type: blob.type })

          formData.append('avatar', file)

          uploadFile(formData)
          stepBack()
          onClose && onClose()
        }
      })
    } else {
      formData.append('avatar', blob as Blob)

      uploadFile(formData)
      stepBack()
      onClose && onClose()
    }
  }

  const interfaceVariants = {
    1: <Interface1 url={url} error={errorText} styles={styles} callback={stepUp} />,
    2: <Interface2 url={url} callback={uploadAvatar} editorRef={editorRef} />,
  }

  const CurrentInterface: JSX.Element = interfaceVariants[step]

  useEffect(() => {
    clearError()
  }, [isOpen])

  return (
    <>
      <Modal open={isOpen} onChange={onChange}>
        <Modal.Content
          className={s.container}
          title={modal.label}
          onInteractOutside={e => e.preventDefault()}
        >
          {CurrentInterface}
        </Modal.Content>
      </Modal>

      <LoaderV2 isLoading={isUploading} label={'Saving...'} />
    </>
  )
}

type InterfaceType1 = {
  error?: string
  url?: string
  styles?: string
  callback: (file: File) => void
}

const Interface1 = ({ error, url, styles, callback }: InterfaceType1) => {
  const formRef = useRef<HTMLFormElement>(null)

  const { t } = useTranslation()
  const { modal } = t.profileSettings.generalSettings.profileImage

  const { JPG, PNG } = MIME_TYPES

  const ErrorMessage = error && (
    <Typography variant={'regular-14'} className={s.error}>
      <b>Error!</b> {error}
    </Typography>
  )

  const handleUpload = () => {
    if (!formRef.current) return

    const { files } = formRef.current.file

    void callback(files[0])
  }

  return (
    <div className={s.content}>
      {ErrorMessage}

      <Avatar src={''} rounded={false} width={222} height={228} className={styles} />
      <FileInput
        ref={formRef}
        className={s.input}
        label={modal.btn.label}
        onUpload={handleUpload}
        accept={[JPG, PNG]}
      />
    </div>
  )
}

type InterfaceType2 = {
  url: string
  callback: () => void
  editorRef: React.RefObject<AvatarEditor>
}

const Interface2 = ({ callback, url, editorRef }: InterfaceType2) => {
  const { t } = useTranslation()
  const [sliderValue, setSliderValue] = useState<number>(10)
  const [croppedAvatar, setCroppedAvatar] = useState<string | null>(null)
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 })
  const { modal } = t.profileSettings.generalSettings.profileImage

  const handlePositionChange = (position: { x: number; y: number }) => {
    setPosition(position)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.preview}>
        <AvatarEditor
          image={url}
          ref={editorRef}
          width={282}
          height={290}
          color={[23, 23, 23, 0.6]}
          backgroundColor={'black'}
          scale={sliderValue / 10}
          borderRadius={155}
          position={position}
          onPositionChange={handlePositionChange}
          crossOrigin="anonymous"
          disableBoundaryChecks={false}
        />
      </div>

      <SliderComponent sliderValue={sliderValue} setSliderValue={setSliderValue} />
      <Button className={s.btn} onClick={callback}>
        {modal.submitBtn.label}
      </Button>
    </div>
  )
}
