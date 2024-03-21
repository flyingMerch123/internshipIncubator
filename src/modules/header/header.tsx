import React, { PropsWithChildren } from 'react'

import { useMatchMedia } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { notifications } from '@/app/data/notifications-bell/notifications-bell'
import { LanguageSelect, NotificationsBell } from '@/components'
import { DropdownMenuWithItems } from '@/modules'
import { Button, Typography } from '@/ui'
import Link from 'next/link'

import s from './header.module.scss'

type HeaderProps = {
  isAuthed: boolean
}

export function Header({ children, isAuthed = false }: PropsWithChildren<HeaderProps>) {
  const { isDesktop, isMobile } = useMatchMedia()
  const showAuthButtons = !isAuthed && isDesktop

  return (
    <div className={s.wrapper}>
      <header className={s.container}>
        <Link href={'/'}>
          <Typography as={'span'} variant={'large'}>
            Проект на последнем издыхании
          </Typography>
        </Link>

        <div className={s.list_wrapper}>
          {children}
          {isAuthed && !isMobile && <NotificationsBell notifications={notifications} />}

          <LanguageSelect />

          {showAuthButtons && (
            <>
              <Button as={Link} href={authNavigationUrls.signIn()} variant={'link'}>
                Log In
              </Button>
              <Button as={Link} href={authNavigationUrls.signUp()} variant={'primary'}>
                Sign Up
              </Button>
            </>
          )}

          {isMobile && <DropdownMenuWithItems />}
        </div>
      </header>
    </div>
  )
}
