import { ErrorWithData, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useCreateNewPasswordMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { useNewPasswordForm } from '@/modules/create-new-password-form/validation-schema'
import { Button, Card, Loader, TextField, Typography } from '@/ui'
import { useRouter } from 'next/router'

import s from './create-new-password.module.scss'

export const NewPasswordForm = ({ code }: { code?: string }) => {
  const [sendNewPassword, { isLoading }] = useCreateNewPasswordMutation()
  const router = useRouter()

  const { t } = useTranslation()

  const { button, description, password, passwordConfirmation, title } = t.newPasswordPage

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
        // {
        //   /*TODO: we need back implementation to case if recovery code expired*/
        // }
        // if (
        //   error?.data?.errorsMessages &&
        //   error.data.errorsMessages[0].message ===
        //     'Confirmation or Recovery code should be exist and actually'
        // ) {
        //   void router.push(authNavigationUrls.newPasswordConfirmation())
        // }
      })
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {title}
      </Typography>
      <form onSubmit={setNewPassword}>
        <TextField
          {...register('password')}
          className={s.email}
          error={errors?.password?.message}
          inputType={'password'}
          label={password.label}
        />

        <TextField
          {...register('confirmPassword')}
          className={s.confirmation}
          error={errors?.confirmPassword?.message}
          inputType={'password'}
          label={passwordConfirmation.label}
        />
        <Typography as={'p'} className={s.description} variant={'regular-14'}>
          {description}
        </Typography>

        <Button className={s.button} disabled={!isValid} fullWidth type={'submit'}>
          {isLoading ? <Loader isLoading /> : button.submit}
        </Button>
      </form>
    </Card>
  )
}
