import React from 'react'

import Error from 'next/error'
import { useRouter } from 'next/router'

import { LinkExpired, NewPasswordForm } from '@/modules'

const NewPasswordCodeStatus = {
  success: 'success',
  expired: 'expired',
} as const

type QueryType = {
  status: ConfirmationStatusType
  code: string
}
type ConfirmationStatusType = keyof typeof NewPasswordCodeStatus

const withRecoveryCode = (params: { status: ConfirmationStatusType; code?: string }) => {
  const { status, code } = params

  return {
    [NewPasswordCodeStatus.success]: <NewPasswordForm code={code} />,
    [NewPasswordCodeStatus.expired]: <LinkExpired />,
  }[status]
}

const CreateNewPassword = () => {
  const { query } = useRouter()
  const typedQuery = query as QueryType

  return withRecoveryCode({ ...typedQuery }) || <Error statusCode={404} />
}

export default CreateNewPassword
