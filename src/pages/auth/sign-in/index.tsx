import React from 'react'

import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { SignInForm } from '@/modules'
import { useRouter } from 'next/router'

const SignInPage = () => {
  const { data: me } = useGetMeQuery()

  const { push } = useRouter()

  if (me) {
    void push(authNavigationUrls.home())
  }

  return <SignInForm />
}

export default SignInPage
