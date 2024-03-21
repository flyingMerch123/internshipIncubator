import { FormEventHandler } from 'react'

import { Button } from '@/ui'

import s from './add-comment.module.scss'

export const AddComment = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    /*
                Todo POST request to save comment
            */
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input name={'comment'} placeholder={'Add a comment...'} spellCheck={false} type={'text'} />
      <Button type={'submit'} variant={'outlined'}>
        Publish
      </Button>
    </form>
  )
}
