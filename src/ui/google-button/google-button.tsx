import React from 'react'

import { GoogleIcon } from '@/app/assets/svg'
import { Button } from '@/ui/button'
import { useRouter } from 'next/router'

import s from './google-button.module.scss'

type Props = {
  onClick?: (value: boolean) => void
}
export const GoogleButton = ({ onClick }: Props) => {
  const router = useRouter()

  const googleButtonHandler = () => {
    onClick && onClick(true)
    const CLIENT_ID = '535513477329-0m3nj9m45g3r0sm8kdh5i8c5jkjs88f0.apps.googleusercontent.com'
    const REDIRECT_URL = 'http://localhost:3001/oauth-callback-google'
    const scope = 'email profile'
    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${REDIRECT_URL}&client_id=${CLIENT_ID}`

    window.location.assign(url)
  }

  return (
    <Button className={s.button} onClick={googleButtonHandler} type={'button'}>
      <GoogleIcon height={36} width={36} />
    </Button>
  )
}
