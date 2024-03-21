import React from 'react'

import { LinkExpired, NewPasswordForm } from '@/modules'
import Error from 'next/error'
import { useRouter } from 'next/router'

const NewPasswordCodeStatus = {
  expired: 'expired',
  success: 'success',
} as const

type QueryType = {
  code: string
  status: ConfirmationStatusType
}
type ConfirmationStatusType = keyof typeof NewPasswordCodeStatus

const withRecoveryCode = (params: { code?: string; status: ConfirmationStatusType }) => {
  const { code, status } = params

  return {
    [NewPasswordCodeStatus.expired]: <LinkExpired />,
    [NewPasswordCodeStatus.success]: <NewPasswordForm code={code} />,
  }[status]
}

const CreateNewPassword = () => {
  const { query } = useRouter()
  const typedQuery = query as QueryType

  return withRecoveryCode({ ...typedQuery }) || <Error statusCode={404} />
}

export default CreateNewPassword
