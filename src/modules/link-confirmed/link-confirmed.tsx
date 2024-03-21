import { useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { useEmailConfirmationMutation } from '@/app/services/auth/auth.api'
import { Button, Typography } from '@/ui'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './link-confirmed.module.scss'

import confirmationImg from '../../../public/assets/images/link-confirmation.svg'

export const LinkConfirmed = () => {
  const { query } = useRouter()
  const [confirmEmail] = useEmailConfirmationMutation()

  const { t } = useTranslation()
  const { button: label, description, title } = t.linkConfirmedPage

  const confirmAccount = () => {
    confirmEmail({ confirmationCode: query.code as string })
  }

  return (
    <div>
      <div className={s.wrapper}>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {title}
        </Typography>
        <Typography as={'p'} className={s.description} variant={'regular-16'}>
          {description}
        </Typography>
        <Button
          as={Link}
          className={s.button}
          href={authNavigationUrls.signIn()}
          onClick={confirmAccount}
        >
          {label}
        </Button>
      </div>
      <Image
        alt={'link-confirmed'}
        className={s.image}
        height={300}
        src={confirmationImg}
        width={432}
      />
    </div>
  )
}
