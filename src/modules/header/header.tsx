import React, { PropsWithChildren } from 'react'

import Link from 'next/link'

import s from './header.module.scss'

import { useMatchMedia } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { notifications } from '@/app/data/notifications-bell/notifications-bell'
import { LanguageSelect, NotificationsBell } from '@/components'
import { DropdownMenuWithItems } from '@/modules'
import { Button, Typography } from '@/ui'

type HeaderProps = {
  isAuthed: boolean
}
export function Header({ children, isAuthed = false }: PropsWithChildren<HeaderProps>) {
  const { isMobile, isTablet } = useMatchMedia()
  const showAuthButtons = !isAuthed && !isMobile && !isTablet

  return (
    <div className={s.wrapper}>
      <header className={s.container}>
        <Link href="/">
          <Typography as="span" variant="large">
            Inctagram
          </Typography>
        </Link>
        <div className={s.list_wrapper}>
          {children}
          {isAuthed && <NotificationsBell notifications={notifications} />}

          <LanguageSelect />

          {showAuthButtons && (
            <>
              <Button as={Link} variant={'link'} href={authNavigationUrls.signIn()}>
                Log In
              </Button>
              <Button as={Link} variant={'primary'} href={authNavigationUrls.signUp()}>
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
