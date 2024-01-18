import React, { useRef } from 'react'

import { nanoid } from '@reduxjs/toolkit'

import s from './interfaces.module.scss'

import { AccountIcon, MIME_TYPES } from '@/app'
import { addImage } from '@/app/services/post/slider.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import { Button, FileInput, Typography } from '@/ui'

type AddInterfaceProps = {
  error?: string
  callback: (file: File) => void
}
export const AddInterface = ({ callback, error }: AddInterfaceProps) => {
  const formRef = useRef<HTMLFormElement>(null)
  const { JPG, PNG } = MIME_TYPES

  const dispatch = useAppDispatch()

  const ErrorMessage = error && (
    <Typography variant={'regular-14'} className={s.error}>
      <b>Error!</b> {error}
    </Typography>
  )
  const handleUpload = () => {
    if (!formRef.current) return

    const { files } = formRef.current.file

    const newFile = {
      url: URL.createObjectURL(files[0]),
      alt: files[0].name,
      id: nanoid(),
    }

    dispatch(addImage(newFile))
    void callback(files[0])
  }

  return (
    <>
      {ErrorMessage}
      <div className={s.loopBackImg}>
        <AccountIcon />
      </div>
      <div className={s.buttons}>
        <FileInput
          ref={formRef}
          className={s.input}
          label={'Select from computer'}
          onUpload={handleUpload}
          accept={[JPG, PNG]}
        />

        <Button variant={'outlined'} onClick={() => {}}>
          Open draft
        </Button>
      </div>
    </>
  )
}