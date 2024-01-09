import '@/app/styles/_global-classes.scss'

import { PropsWithChildren } from 'react'

import s from './header-layout.module.scss'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { Header } from '@/modules/header'

export const HeaderLayout = ({ children }: PropsWithChildren) => {
  const { data: me } = useGetMeQuery()

  return (
    <>
      <Header isAuthed={!!me} />
      <div className={s.container}>{children}</div>
    </>
  )
}
