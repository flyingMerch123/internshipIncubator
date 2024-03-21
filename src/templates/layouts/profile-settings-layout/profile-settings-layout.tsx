import { PropsWithChildren } from 'react'

import { SettingsTabs } from '@/modules/settings-tabs/settings-tabs'

import s from './profile-settings-layout.module.scss'

export const ProfileSettingLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className={s.container}>
      <SettingsTabs />
      <div className={s.content}>{children}</div>
    </main>
  )
}
