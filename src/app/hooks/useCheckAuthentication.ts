import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { ErrorWithData, showError } from '@/app'
import { useGetMeQuery } from '@/app/services/auth/auth.api'

export const useCheckAuthentication = () => {
  const { data: me, error } = useGetMeQuery()
  const { push } = useRouter()

  useEffect(() => {
    if (!me) {
      void push('/auth/sign-in/')
    }
  }, [me, push])

  if (error) {
    showError(error as ErrorWithData)

    return { error: true }
  }

  return { isAuthenticated: true, user: me }
}
