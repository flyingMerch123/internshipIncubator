import React, { useState } from 'react'

import { DevTool } from '@hookform/devtools'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './forgot-password-form.module.scss'
import { useForgotPasswordForm } from './validation-schema'

import { useDisclose, useMatchMedia, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { usePasswordRecoveryMutation } from '@/app/services/auth/auth.api'
import { NotificationModal } from '@/components'
import { Button, Card, ControlledReCaptcha, Loader, TextField, Typography } from '@/ui'

export const ForgotPasswordForm = () => {
  const { isMobile } = useMatchMedia()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const { isOpen, onOpen, onToggle } = useDisclose()

  const { locale } = useRouter()
  const [recoverPassword, { isLoading }] = usePasswordRecoveryMutation()

  const { t } = useTranslation()
  const { title, email, message, button } = t.forgotPasswordPage
  const { link, submitTextV1, submitTextV2 } = button

  const labels = {
    button: isSubmitted ? submitTextV2 : submitTextV1,
    submission() {
      return isLoading ? <Loader isLoading /> : this.button
    },
  }

  const {
    control,
    resetField,
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
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
    recoverPassword(data)
      .unwrap()
      .then(onOpen)
      .catch(() => {
        setError(email.validation.serverError)
      })
  })

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'} className={s.title}>
        {title}
      </Typography>
      <form onSubmit={sendForm} onInput={clearError}>
        {/*{DEVTOOLS}*/}
        <DevTool control={control} />
        {/*{DEVTOOLS}*/}

        <TextField
          {...register('email')}
          label={email.label}
          className={s.email}
          error={errors?.email?.message || error}
        />
        <Typography as={'p'} variant={'regular-14'} className={s.description}>
          {message.beforeSubmission}
        </Typography>

        {isSubmitted && (
          <Typography as={'p'} variant={'regular-14'} className={s.submitted}>
            {message.afterSubmission}
          </Typography>
        )}
        {isMobile && (
          <ControlledReCaptcha
            control={control}
            name={'token'}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
            hl={locale}
            theme={'dark'}
            className={s.recaptcha}
            error={errors?.token?.message}
          />
        )}
        <Button fullWidth className={s.button} type={'submit'} disabled={!isValid}>
          {labels.submission()}
        </Button>
        <Button
          className={s.signUpBtn}
          as={Link}
          variant={'link'}
          href={authNavigationUrls.signUp()}
        >
          {`${link.description} ${link.text}`}
        </Button>
        {!isMobile && !isSubmitted && (
          <ControlledReCaptcha
            control={control}
            name={'token'}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!}
            hl={locale}
            theme={'dark'}
            className={s.recaptcha}
            error={errors?.token?.message}
          />
        )}
      </form>

      <NotificationModal
        isOpen={isOpen}
        onClose={onModalClose}
        message={`${message.notificationMessage} ${emailAddress} `}
      />
    </Card>
  )
}
