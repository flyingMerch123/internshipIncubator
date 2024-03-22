import { useRef } from 'react'

import { AccountIcon, MIME_TYPES, useTranslation } from '@/app'
import { getDrafts } from '@/app/helpers/addDraftToDB'
import { Button, FileInput } from '@/ui'

import s from './interfaces.module.scss'

type AddInterfaceProps = {
  callback: (file: File) => void
}
export const AddInterface = ({ callback }: AddInterfaceProps) => {
  const { t } = useTranslation()
  const { select } = t.createPost
  const formRef = useRef<HTMLFormElement>(null)
  const { JPG, PNG } = MIME_TYPES

  const handleUpload = () => {
    if (!formRef.current) {
      return
    }

    const { files } = formRef.current.file

    void callback(files[0])
  }
  const openDraft = async () => {
    const [drafts] = await getDrafts()

    console.log(drafts)
  }

  return (
    <>
      <div className={s.loopBackImg}>
        <AccountIcon />
      </div>
      <div className={s.buttons}>
        <FileInput
          accept={[JPG, PNG]}
          className={s.input}
          label={select}
          onUpload={handleUpload}
          ref={formRef}
        />

        <Button onClick={openDraft} variant={'outlined'}>
          Open draft
        </Button>
      </div>
    </>
  )
}
