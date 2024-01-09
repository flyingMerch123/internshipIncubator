import { useRouter } from 'next/router'

import s from './mobile-sidebar-menu-with-items.module.scss'

import {
  CreateMenuIcon,
  HomeMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
} from '@/app'
import { menuNavigation } from '@/app/constants'
import { MenuItem, SidebarMenu } from '@/ui'

export const MobileSidebarMenuWithItems = () => {
  const { pathname } = useRouter()

  return (
    <SidebarMenu className={s.nav}>
      <MenuItem
        href={menuNavigation.home()}
        icon={HomeMenuIcon}
        isSelected={pathname === menuNavigation.home()}
        isStyled={false}
      />
      <MenuItem
        href={menuNavigation.create()}
        icon={CreateMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.create())}
        isStyled={false}
      />

      <MenuItem
        href={menuNavigation.messenger()}
        icon={MessageMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.messenger())}
        isStyled={false}
      />
      <MenuItem
        href={menuNavigation.search()}
        icon={SearchMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.search())}
        isStyled={false}
      />
      <MenuItem
        href={menuNavigation.profile()}
        icon={ProfileMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.profile())}
        isStyled={false}
      />
    </SidebarMenu>
  )
}
