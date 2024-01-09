import React from 'react'

import Error from 'next/error'
import { useRouter } from 'next/router'

import { LinkConfirmed, LinkExpired } from '@/modules'

const ConfirmationStatus = {
  success: 'success',
  failed: 'failed',
} as const

type QueryType = { status: ConfirmationStatusType }
type ConfirmationStatusType = keyof typeof ConfirmationStatus

const LinkStatusData: {
  [key in ConfirmationStatusType]: React.ReactElement
} = {
  [ConfirmationStatus.success]: <LinkConfirmed />,
  [ConfirmationStatus.failed]: <LinkExpired />,
}

const RegistrationConfirmation = () => {
  const { query } = useRouter()
  const typedQuery = query as QueryType

  return LinkStatusData[typedQuery.status] || <Error statusCode={404} />
}

export default RegistrationConfirmation
