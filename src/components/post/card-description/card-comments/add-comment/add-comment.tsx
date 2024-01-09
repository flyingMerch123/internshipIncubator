import { FormEventHandler } from 'react'

import s from './add-comment.module.scss'

import { Button } from '@/ui'

export const AddComment = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    /*
        Todo POST request to save comment
    */
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name={'comment'} placeholder={'Add a comment...'} spellCheck={false} />
      <Button variant={'outlined'} type={'submit'}>
        Publish
      </Button>
    </form>
  )
}
