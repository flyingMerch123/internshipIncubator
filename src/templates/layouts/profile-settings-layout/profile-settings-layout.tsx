import { PropsWithChildren } from 'react'

import s from './profile-settings-layout.module.scss'

import { useCheckAuthentication } from '@/app/hooks/useCheckAuthentication'
import { SettingsTabs } from '@/modules/settings-tabs/settings-tabs'

export const ProfileSettingLayout = ({ children }: PropsWithChildren) => {
  useCheckAuthentication()

  return (
    <main className={s.container}>
      <SettingsTabs />
      <div className={s.content}>{children}</div>
    </main>
  )
}
