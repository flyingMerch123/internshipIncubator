import React, { useState } from 'react'

import { DevTool } from '@hookform/devtools'
import Link from 'next/link'
import { toast } from 'react-toastify'

import s from './sign-in-form.module.scss'

import { ErrorWithData, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useSignInMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { LoaderV2, ControlledTextField } from '@/components'
import { useSignInForm } from '@/modules'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'

export const SignInForm = () => {
  //TODO remove progressBar state after refactoring oAuthButtons
  const [progressBar, setProgressBar] = useState<boolean>(false)
  const [signIn, { isLoading }] = useSignInMutation()

  const {
    handleSubmit,
    formState: { isValid, dirtyFields },
    control,
  } = useSignInForm()
  const isButtonDisabled = isLoading || (dirtyFields && !isValid)

  const { t } = useTranslation()
  const { signInForm: text } = t.authPages.signInPage

  const onSubmitForm = handleSubmit(data => {
    signIn(data)
      .unwrap()
      .then(() => {
        toast.success('signed in successfully!')
      })
      .catch((error: ErrorWithData) => {
        showError(error)
      })
  })

  return (
    <div>
      <Card className={s.container}>
        <LoaderV2 isLoading={isLoading || progressBar} label={'Verifying...'} />

        <form className={s.form} onSubmit={onSubmitForm}>
          <div className={s.wrapper}>
            <Typography className={s.header} variant={'h1'}>
              {text.signIn}
            </Typography>
            <div className={s.oauthIcons}>
              <GoogleButton onClick={setProgressBar} />
              <GithubButton onClick={setProgressBar} />
            </div>
            <DevTool control={control} />
            <ControlledTextField
              className={s.textField}
              label={text.email}
              name={'email'}
              control={control}
            />
            <ControlledTextField
              className={s.textField}
              label={text.password}
              name={'password'}
              inputType={'password'}
              control={control}
            />
            <Link href={authNavigationUrls.forgotPassword()}>
              <Typography className={s.forgotPassword} variant={'regular-14'}>
                {text.forgotPassword}
              </Typography>
            </Link>
            <Button
              disabled={isButtonDisabled}
              type={'submit'}
              className={s.signInBtn}
              fullWidth={true}
            >
              {text.signIn}
            </Button>
            <Typography className={s.accountText} variant={'regular-16'}>
              {text.haveAccount}
            </Typography>

            <Button
              className={s.signUpBtn}
              as={Link}
              variant={'link'}
              href={authNavigationUrls.signUp()}
            >
              {text.signUp}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
