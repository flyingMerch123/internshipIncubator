import { useRouter } from 'next/router'

import s from './create-new-password.module.scss'

import { ErrorWithData, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useCreateNewPasswordMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { useNewPasswordForm } from '@/modules/create-new-password-form/validation-schema'
import { Button, Card, Loader, TextField, Typography } from '@/ui'

export const NewPasswordForm = ({ code }: { code?: string }) => {
  const [sendNewPassword, { isLoading }] = useCreateNewPasswordMutation()
  const router = useRouter()

  const { t } = useTranslation()

  const { title, password, passwordConfirmation, description, button } = t.newPasswordPage

  const {
    formState: { errors, isValid },
    handleSubmit,
    register,
    reset,
  } = useNewPasswordForm()

  const setNewPassword = handleSubmit((data, e?) => {
    e?.preventDefault()

    sendNewPassword({ newPassword: data.password, recoveryCode: code || '' })
      .unwrap()
      .then(() => {
        void router.push(authNavigationUrls.newPasswordConfirmation())
        reset()
      })
      .catch((error: ErrorWithData) => {
        showError(error)
        {
          /*TODO: we need back implementation to case if recovery code expired*/
        }
        if (
          error?.data?.errorsMessages &&
          error.data.errorsMessages[0].message ===
            'Confirmation or Recovery code should be exist and actually'
        ) {
          void router.push(authNavigationUrls.newPasswordConfirmation())
        }
      })
  })

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
          {isLoading ? <Loader isLoading /> : button.submit}
        </Button>
      </form>
    </Card>
  )
}
