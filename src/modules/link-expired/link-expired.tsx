import React from 'react'

import { ErrorWithData } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import { useDisclose, useMatchMedia, useTranslation } from '@/app/hooks'
import { useResendEmailMutation } from '@/app/services/auth/auth.api'
import { showError } from '@/app/utils'
import { NotificationModal } from '@/components'
import { LINK_EXPIRED_COMPONENT_MODE } from '@/modules/link-expired/constatnts'
import { Button, Typography } from '@/ui'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './link-expired.module.scss'

import expiredImg from '../../../public/assets/images/link-expired.svg'

export const LinkExpired = ({
  email,
  mode,
}: {
  email?: string
  mode?: keyof typeof LINK_EXPIRED_COMPONENT_MODE
}) => {
  const { isOpen, onClose, onOpen } = useDisclose()
  const { push } = useRouter()
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()
  const { button: label, description, title } = t.linkExpiredPage
  //@TODO- add text to the confirmation modal
  const { signUpForm: text } = t.authPages.signUpPage
  const [resendConfirmationLink] = useResendEmailMutation()

  const resendLink = () => {
    FRONT_BASE_URL &&
      email &&
      resendConfirmationLink({ baseUrl: FRONT_BASE_URL, email })
        .unwrap()
        .then(() => {
          onOpen()
        })
        .catch((error: ErrorWithData) => {
          showError(error)
        })
  }

  const onCloseNotification = () => {
    onClose()
    void push(authNavigationUrls.signIn())
  }

  const button = (
    <Button className={s.button} onClick={resendLink}>
      {label}
    </Button>
  )

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {title}
        </Typography>
        <Typography as={'p'} className={s.description} variant={'regular-16'}>
          {description}
        </Typography>
        {!isMobile ? button : null}
      </div>
      <Image alt={'link-expired'} className={s.image} height={355} src={expiredImg} width={475} />
      {isMobile ? button : null}
      <NotificationModal
        isOpen={isOpen}
        message={`${text.notificationMessage} ${email} `}
        onClose={onCloseNotification}
      />
    </div>
  )
}
