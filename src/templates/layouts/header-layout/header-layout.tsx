import { PropsWithChildren } from 'react'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { Header } from '@/modules/header'

import '@/app/styles/_global-classes.scss'

import s from './header-layout.module.scss'

export const HeaderLayout = ({ children }: PropsWithChildren) => {
  const { data: me } = useGetMeQuery()

  return (
    <>
      <Header isAuthed={!!me} />
      <div className={s.container}>{children}</div>
    </>
  )
}
