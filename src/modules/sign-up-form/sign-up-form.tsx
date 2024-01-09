import React, { useState } from 'react'

import Link from 'next/link'

import s from './sign-up-form.module.scss'

import { ErrorWithData, TagProcessor, useDisclose, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useSignUpMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { ControlledCheckbox, ControlledTextField, LoaderV2, NotificationModal } from '@/components'
import { useSignupForm } from '@/modules'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'

export const SignUpForm = () => {
  const [progressBar, setProgressBar] = useState<boolean>(false)
  const [register, { isLoading }] = useSignUpMutation()
  const { isOpen, onClose, onOpen } = useDisclose()

  const { t } = useTranslation()
  const { signUpForm: text } = t.authPages.signUpPage

  const {
    control,
    formState: { isValid, dirtyFields },
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
  } = useSignupForm()
  const email = watch('email')
  const isButtonDisabled = isLoading || (dirtyFields && !isValid)

  const onCloseNotification = () => {
    onClose()
    reset()
  }

  const onSubmitForm = handleSubmit(data => {
    register({ ...data, login: data.userName })
      .unwrap()
      .then(() => {
        onOpen()
      })
      .catch((error: ErrorWithData) => {
        showError(error)
      })
  })

  const onBlurConfirmPassword = () => {
    if (watch('password') != watch('confirmPassword')) {
      return setError('confirmPassword', {
        type: 'custom',
        message: `${text.formErrors.confirmPassword.matchPasswords}`,
      })
    }

    clearErrors('confirmPassword')
  }

  const policyLinks = (
    <Typography variant={'small'}>
      <TagProcessor
        text={text.policyLinks}
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
      />
    </Typography>
  )

  return (
    <div>
      <Card className={s.container}>
        <LoaderV2 isLoading={isLoading || progressBar} label={'Verifying...'} />

        <form onSubmit={onSubmitForm}>
          <div className={s.wrapper}>
            <Typography variant={'h1'}>{text.signUp}</Typography>
            <div className={s.oauthIcons}>
              <GoogleButton onClick={setProgressBar} />
              <GithubButton onClick={setProgressBar} />
            </div>
            <ControlledTextField
              className={s.textField}
              label={text.userName}
              inputType={'text'}
              name={'userName'}
              control={control}
            />
            <ControlledTextField
              className={s.textField}
              label={text.email}
              inputType={'text'}
              name={'email'}
              control={control}
            />
            <ControlledTextField
              className={s.textField}
              label={text.password}
              inputType={'password'}
              name={'password'}
              control={control}
            />
            <ControlledTextField
              className={s.textField}
              label={text.confirmPassword}
              inputType={'password'}
              name={'confirmPassword'}
              control={control}
              onBlur={onBlurConfirmPassword}
            />
            <div className={s.policy}>
              <ControlledCheckbox
                left={true}
                name={'policy'}
                control={control}
                labelTitle={<div style={{ fontSize: 'var(--font-size-xs)' }}>{text.policy}</div>}
              />
              {policyLinks}
            </div>
            <Button
              type={'submit'}
              disabled={isButtonDisabled}
              variant={'primary'}
              fullWidth={true}
              className={s.button}
            >
              {text.signUp}
            </Button>
            <Typography variant={'regular-16'} className={s.text}>
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
        onClose={onCloseNotification}
        message={`${text.notificationMessage} ${email} `}
      />
    </div>
  )
}
