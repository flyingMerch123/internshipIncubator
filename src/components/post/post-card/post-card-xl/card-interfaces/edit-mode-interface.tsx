import { ChangeEventHandler, FormEventHandler, useState } from 'react'

import { COMMON_MODE_STATE } from '@/app/constants/enums'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { useUpdatePostByIdMutation } from '@/app/services/posts/posts.api'
import { compareDescriptionVersions } from '@/app/services/posts/posts.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'
import { CardDescription } from '@/components'
import { Button, TextArea } from '@/ui'

import s from '../post-card-xl.module.scss'

type EditModeInterfaceProps = {
  description?: string
  isLoading?: boolean
  postId: number
  url?: string
  userName?: string
}

export const EditModeInterface = ({ description, postId, userName }: EditModeInterfaceProps) => {
  const [text, setText] = useState<string>(description || '')
  const { changePostCardModalMode, updatePostDescription } = usePostCardModal()
  const [updatePost] = useUpdatePostByIdMutation()
  const dispatch = useAppDispatch()
  const post = useAppSelector(state => state.post)

  const handleDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
    const text = e.target.value

    setText(text)
    dispatch(compareDescriptionVersions({ final: text, initial: description }))
  }

  const saveEditedDescription: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    updatePost({ description: text, postId: postId })
      .unwrap()
      .then(() => {
        updatePostDescription(text)
        changePostCardModalMode(COMMON_MODE_STATE.VIEW)
      })
  }

  return (
    <div className={s.edit}>
      <CardDescription userName={userName} />

      <form className={s.form} onSubmit={saveEditedDescription}>
        <TextArea
          initialSize={text.length}
          label={'Add publication descriptions'}
          name={'description'}
          onChange={handleDescriptionChange}
          sizeLimit={500}
          value={text}
        />

        <Button className={s.btn} disabled={!post.isEdited} type={'submit'}>
          Save Changes
        </Button>
      </form>
    </div>
  )
}
