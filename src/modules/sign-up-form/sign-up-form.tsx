import React, { useState } from 'react'

import { ErrorWithData, TagProcessor, useDisclose, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import { useLoadingSpinner } from '@/app/services/application/application.hooks'
import { useSignUpMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { ControlledCheckbox, ControlledTextField, NotificationModal } from '@/components'
import { useSignupForm } from '@/modules'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'
import Link from 'next/link'

import s from './sign-up-form.module.scss'

export const SignUpForm = () => {
  const [progressBar, setProgressBar] = useState<boolean>(false)
  const [register, { isLoading }] = useSignUpMutation()
  const { isOpen, onClose, onOpen } = useDisclose()
  const { startLoadingSpinner, stopLoadingSpinner } = useLoadingSpinner()
  const { t } = useTranslation()
  const { signUpForm: text } = t.authPages.signUpPage

  const {
    clearErrors,
    control,
    formState: { dirtyFields, isValid },
    handleSubmit,
    reset,
    setError,
    watch,
  } = useSignupForm()
  const email = watch('email')
  const isButtonDisabled = isLoading || (dirtyFields && !isValid)

  const onCloseNotification = () => {
    onClose()
    reset()
  }

  const onSubmitForm = handleSubmit(data => {
    const { email, password, userName } = data

    if (FRONT_BASE_URL) {
      startLoadingSpinner({
        isLoading: isLoading || progressBar,
        message: 'Verifying...',
      })
      register({ baseUrl: FRONT_BASE_URL, email, password, userName })
        .unwrap()
        .then(() => {
          onOpen()
        })
        .catch((error: ErrorWithData) => {
          showError(error)
        })
        .finally(() => {
          stopLoadingSpinner()
        })
    }
  })

  const onBlurConfirmPassword = () => {
    if (watch('password') != watch('confirmPassword')) {
      return setError('confirmPassword', {
        message: `${text.formErrors.confirmPassword.matchPasswords}`,
        type: 'custom',
      })
    }

    clearErrors('confirmPassword')
  }

  const policyLinks = (
    <Typography variant={'small'}>
      <TagProcessor
        tags={{
          1: () => (
            <Typography variant={'small-link'}>
              <Link href={authNavigationUrls.termsOfService()}>{text.termsOfService}</Link>
            </Typography>
          ),
          2: () => (
            <Typography variant={'small-link'}>
              <Link href={authNavigationUrls.privacyPolicy()}>{text.privacyPolicy}</Link>
            </Typography>
          ),
        }}
        text={text.policyLinks}
      />
    </Typography>
  )

  return (
    <div>
      <Card className={s.container}>
        <form onSubmit={onSubmitForm}>
          <div className={s.wrapper}>
            <Typography variant={'h1'}>{text.signUp}</Typography>
            <div className={s.oauthIcons}>
              <GoogleButton onClick={setProgressBar} />
              <GithubButton onClick={setProgressBar} />
            </div>
            <ControlledTextField
              className={s.textField}
              control={control}
              inputType={'text'}
              label={text.userName}
              name={'userName'}
            />
            <ControlledTextField
              className={s.textField}
              control={control}
              inputType={'text'}
              label={text.email}
              name={'email'}
            />
            <ControlledTextField
              className={s.textField}
              control={control}
              inputType={'password'}
              label={text.password}
              name={'password'}
            />
            <ControlledTextField
              className={s.textField}
              control={control}
              inputType={'password'}
              label={text.confirmPassword}
              name={'confirmPassword'}
              onBlur={onBlurConfirmPassword}
            />
            <div className={s.policy}>
              <ControlledCheckbox
                control={control}
                labelTitle={<div style={{ fontSize: 'var(--font-size-xs)' }}>{text.policy}</div>}
                left
                name={'policy'}
              />
              {policyLinks}
            </div>
            <Button
              className={s.button}
              disabled={isButtonDisabled}
              fullWidth
              type={'submit'}
              variant={'primary'}
            >
              {text.signUp}
            </Button>
            <Typography className={s.text} variant={'regular-16'}>
              {text.haveAccount}
            </Typography>
            <Link href={authNavigationUrls.signIn()}>
              <Button variant={'link'}>{text.signIn}</Button>
            </Link>
          </div>
        </form>
      </Card>
      <NotificationModal
        isOpen={isOpen}
        message={`${text.notificationMessage} ${email} `}
        onClose={onCloseNotification}
      />
    </div>
  )
}
