import React, { useState } from 'react'
import { toast } from 'react-toastify'

import { ErrorWithData, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useSignInMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { ControlledTextField } from '@/components'
import { useSignInForm } from '@/modules'
import { Button, Card, GithubButton, GoogleButton, Typography } from '@/ui'
import { DevTool } from '@hookform/devtools'
import Link from 'next/link'

import s from './sign-in-form.module.scss'

export const SignInForm = () => {
  //TODO remove progressBar state after refactoring oAuthButtons
  const [progressBar, setProgressBar] = useState<boolean>(false)
  const [signIn, { isLoading }] = useSignInMutation()

  const {
    control,
    formState: { isDirty, isLoading: isFormLoading, isValid },
    handleSubmit,
  } = useSignInForm()
  const isButtonDisabled = isFormLoading || !isValid || !isDirty

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
              control={control}
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
            <Link href={authNavigationUrls.forgotPassword()}>
              <Typography className={s.forgotPassword} variant={'regular-14'}>
                {text.forgotPassword}
              </Typography>
            </Link>
            <Button className={s.signInBtn} disabled={isButtonDisabled} fullWidth type={'submit'}>
              {text.signIn}
            </Button>
            <Typography className={s.accountText} variant={'regular-16'}>
              {text.haveAccount}
            </Typography>

            <Button
              as={Link}
              className={s.signUpBtn}
              href={authNavigationUrls.signUp()}
              variant={'link'}
            >
              {text.signUp}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
