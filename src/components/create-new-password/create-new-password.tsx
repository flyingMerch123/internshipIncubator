import { useEffect, useState } from 'react'

import s from './create-new-password.module.scss'

import { useTranslation } from '@/app/hooks'
import { NewPasswordConfirmationRedirection } from '@/components/create-new-password/create-new-password-confirmation/create-new-password-confirmation'
import { useNewPasswordForm } from '@/components/create-new-password/validation-schema'
import { Loader } from '@/ui'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { TextField } from '@/ui/text-field'
import { Typography } from '@/ui/typography/typography'

export const NewPasswordForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { t } = useTranslation()

  const { title, password, passwordConfirmation, description, button } = t.newPasswordPage

  const {
    formState: { errors, isValid },
    setFocus,
    handleSubmit,
    register,
    reset,
  } = useNewPasswordForm()

  useEffect(() => {
    setFocus('password')
  }, [])

  const setNewPassword = handleSubmit((data, e?) => {
    e?.preventDefault()

    setIsLoading(true)

    setTimeout(() => {
      console.log(data)

      setIsSubmitted(true)
      setIsLoading(false)
      reset()
    }, 1500)
  })

  if (isSubmitted) {
    return <NewPasswordConfirmationRedirection delay={5000} />
  }

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'} className={s.title}>
        {title}
      </Typography>
      <form onSubmit={setNewPassword}>
        <TextField
          {...register('password')}
          label={password.label}
          inputType={'password'}
          className={s.email}
          error={errors?.password?.message}
        />

        <TextField
          {...register('confirmPassword')}
          label={passwordConfirmation.label}
          inputType={'password'}
          className={s.confirmation}
          error={errors?.confirmPassword?.message}
        />
        <Typography as={'p'} variant={'regular-14'} className={s.description}>
          {description}
        </Typography>

        <Button fullWidth className={s.button} type={'submit'} disabled={!isValid}>
          {isLoading ? <Loader /> : button.submit}
        </Button>
      </form>
    </Card>
  )
}
