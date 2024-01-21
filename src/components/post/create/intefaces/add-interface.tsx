import { useRef } from 'react'

import s from './interfaces.module.scss'

import { AccountIcon, MIME_TYPES } from '@/app'
import { Button, FileInput } from '@/ui'

type AddInterfaceProps = {
  callback: (file: File) => void
}
export const AddInterface = ({ callback }: AddInterfaceProps) => {
  const formRef = useRef<HTMLFormElement>(null)
  const { JPG, PNG } = MIME_TYPES

  const handleUpload = () => {
    if (!formRef.current) return

    const { files } = formRef.current.file

    void callback(files[0])
  }

  return (
    <>
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
