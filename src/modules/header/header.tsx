import React, { ReactNode } from 'react'

import Link from 'next/link'

import s from './header.module.scss'

import { LanguageSelect, NotificationsBell } from '@/components'
import { Typography } from '@/ui'

type HeaderProps = {
  children?: ReactNode
}
export function Header({ children }: HeaderProps) {
  return (
    <header className={s.container}>
      <Link href="/">
        <Typography as="span" variant="large">
          Inctagram
        </Typography>
      </Link>
      <div className={s.list_wrapper}>
        {children}
        <NotificationsBell />
        <LanguageSelect />
      </div>
    </header>
  )
}
