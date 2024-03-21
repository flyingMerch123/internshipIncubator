import { PropsWithChildren } from 'react'

import { useMatchMedia } from '@/app'
import { MobileSidebarMenuWithItems, SidebarMenuWithItems } from '@/modules'
import { HeaderLayout } from '@/templates/layouts'
import { clsx } from 'clsx'

import s from './sidebar-menu-layout.module.scss'

type SidebarMenuLayoutProps = {
  isAuthed?: boolean
}

export const SidebarMenuLayout = ({
  children,
  isAuthed = false,
}: PropsWithChildren<SidebarMenuLayoutProps>) => {
  const { isMobile, isTablet } = useMatchMedia()

  const SidebarVersion =
    isTablet || isMobile ? <MobileSidebarMenuWithItems /> : <SidebarMenuWithItems />

  const styles = {
    root: clsx(s.container, (isTablet || isMobile) && s.mobile),
  }

  return (
    <>
      <HeaderLayout />

      <div className={styles.root}>
        {isAuthed && SidebarVersion}

        <div className={s.wrapper}>{children}</div>
      </div>
    </>
  )
}
