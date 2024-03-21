import { useEffect } from 'react'

import { ErrorWithData } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { UserModel } from '@/app/services/auth/auth.api.types'
import { showError } from '@/app/utils'
import { useRouter } from 'next/router'

interface UseCheckAuthenticationResult {
  error?: ErrorWithData
  isAuthenticated: boolean
  isLoading: boolean
  user?: UserModel | undefined
}

export const useCheckAuthentication = (): UseCheckAuthenticationResult => {
  const { data: me, error, isLoading } = useGetMeQuery()
  const { push } = useRouter()

  useEffect(() => {
    if (!me && !isLoading) {
      void push(authNavigationUrls.main())
    }
  }, [me, isLoading, push])

  if (error) {
    showError(error as ErrorWithData)

    return { error: error as ErrorWithData, isAuthenticated: false, isLoading: false }
  }

  return { isAuthenticated: !!me, isLoading, user: me }
}
