import React, { useState } from 'react'

import { useDisclose, useMatchMedia, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import { usePasswordRecoveryMutation } from '@/app/services/auth/auth.api'
import { NotificationModal } from '@/components'
import { Button, Card, ControlledReCaptcha, Loader, TextField, Typography } from '@/ui'
import { DevTool } from '@hookform/devtools'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './forgot-password-form.module.scss'

import { useForgotPasswordForm } from './validation-schema'

export const ForgotPasswordForm = () => {
  const { isMobile } = useMatchMedia()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { isOpen, onOpen, onToggle } = useDisclose()

  const { locale } = useRouter()
  const [recoverPassword, { isLoading }] = usePasswordRecoveryMutation()

  const { t } = useTranslation()
  const { button, email, message, title } = t.forgotPasswordPage
  const { link, submitTextV1, submitTextV2 } = button

  const labels = {
    button: isSubmitted ? submitTextV2 : submitTextV1,
    submission() {
      return isLoading ? <Loader isLoading /> : this.button
    },
  }

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    register,
    resetField,
    watch,
  } = useForgotPasswordForm()

  const emailAddress = watch('email')

  const clearError = () => {
    setError('')
  }

  const onModalClose = () => {
    onToggle()

    resetField('email')
    setIsSubmitted(true)
    clearError()
  }

  const sendForm = handleSubmit((data, e?) => {
    e?.preventDefault()
    recoverPassword({
      baseUrl: FRONT_BASE_URL || '',
      email: data.email,
      recaptcha: data.token,
    })
      .unwrap()
      .then(onOpen)
      .catch(() => {
        setError(email.validation.serverError)
      })
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {title}
      </Typography>
      <form onInput={clearError} onSubmit={sendForm}>
        {/*{DEVTOOLS}*/}
        <DevTool control={control} />
        {/*{DEVTOOLS}*/}

        <TextField
          {...register('email')}
          className={s.email}
          error={errors?.email?.message || error}
          label={email.label}
        />
        <Typography as={'p'} className={s.description} variant={'regular-14'}>
          {message.beforeSubmission}
        </Typography>

        {isSubmitted && (
          <Typography as={'p'} className={s.submitted} variant={'regular-14'}>
            {message.afterSubmission}
          </Typography>
        )}
        {isMobile && (
          <ControlledReCaptcha
            className={s.recaptcha}
            control={control}
            error={errors?.token?.message}
            hl={locale}
            name={'token'}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!}
            theme={'dark'}
          />
        )}
        <Button className={s.button} disabled={!isValid} fullWidth type={'submit'}>
          {labels.submission()}
        </Button>
        <Button
          as={Link}
          className={s.signUpBtn}
          href={authNavigationUrls.signIn()}
          variant={'link'}
        >
          {`${link.description} ${link.text}`}
        </Button>
        {!isMobile && !isSubmitted && (
          <ControlledReCaptcha
            className={s.recaptcha}
            control={control}
            error={errors?.token?.message}
            hl={locale}
            name={'token'}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!}
            theme={'dark'}
          />
        )}
      </form>

      <NotificationModal
        isOpen={isOpen}
        message={`${message.notificationMessage} ${emailAddress} `}
        onClose={onModalClose}
      />
    </Card>
  )
}
