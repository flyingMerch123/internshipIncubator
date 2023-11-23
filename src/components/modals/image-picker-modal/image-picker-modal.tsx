import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'

import s from './image-picker-modal.module.scss'

import { MIME_TYPES } from '@/app'
import { Avatar } from '@/components'
import { useImageValidation } from '@/components/modals/utils'
import { Button, FileInput, Modal, Typography } from '@/ui'

type ImagePickerModalType = {
  error?: string
  showModal?: boolean
  onChange?: (open: boolean) => void
  isOpen: boolean
  onClose?: () => void
}

export const ImagePickerModal = ({ isOpen, onChange, onClose, error }: ImagePickerModalType) => {
  const [step, setStep] = useState<1 | 2>(1)
  // const [blob, setBlob] = useState<Blob | null>(null)
  const [url, setUrl] = useState<string>('')

  const { JPG, PNG } = MIME_TYPES

  const {
    blob,
    setBlob,
    error: formatError,
  } = useImageValidation({
    sizeLimit: 1, // MB type: number
    typeLimit: [JPG, PNG],
  })

  console.log('output', {
    blob,
    formatError,
  })

  const styles = clsx(!error && s.avatar)

  const stepUp = (file: File) => {
    // setBlob(file)
    const blob: Blob = new Blob([file], { type: file.type })
    const url = URL.createObjectURL(blob)

    setBlob(blob)

    // if (!formatError) {
    //   setStep(2)
    // }
  }

  const stepBack = () => setStep(1)

  useEffect(() => {
    if (formatError || !blob) return
    const url = URL.createObjectURL(blob)

    setUrl(url)
    console.log('I dont understand  why its happining!!!!!!!')
    setStep(2)
  }, [blob, formatError])

  // useLayoutEffect(() => {
  //   if (!blob) return
  //
  //   const url = URL.createObjectURL(blob)
  //
  //   setUrl(url)
  // }, [blob, formatError])

  const interfaceVariants = {
    1: <Interface1 url={url} error={formatError} styles={styles} callback={stepUp} />,
    2: <Interface2 url={url} callback={stepBack} />,
  }

  const CurrentInterface: JSX.Element = interfaceVariants[step]

  return (
    <Modal open={isOpen} onOpenChange={onChange}>
      <Modal.Content
        className={s.container}
        title="Add a Profile Photo"
        onInteractOutside={e => e.preventDefault()}
      >
        {CurrentInterface}
      </Modal.Content>
    </Modal>
  )
}

type InterfaceType1 = {
  error?: string
  url?: string
  styles?: string
  callback: (file: File) => void
}

const Interface1 = ({ error, url, styles, callback }: InterfaceType1) => {
  const formRef = useRef<HTMLFormElement | null>(null)

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

      <Avatar src={url} rounded={false} width={222} height={228} className={styles} />
      <FileInput ref={formRef} className={s.input} onUpload={handleUpload} />
    </div>
  )
}

type InterfaceType2 = {
  url: string
  callback: () => void
}

const Interface2 = ({ callback, url }: InterfaceType2) => {
  return (
    <div className={s.wrapper}>
      <div className={s.preview}>
        <img src={url} alt="avatar-image" />
      </div>

      <Button className={s.btn} onClick={callback}>
        Save
      </Button>
    </div>
  )
}
