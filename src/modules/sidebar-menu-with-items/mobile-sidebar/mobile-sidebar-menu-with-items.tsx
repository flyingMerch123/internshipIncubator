import {
  CreateMenuIcon,
  HomeMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
} from '@/app'
import { menuNavigation } from '@/app/constants'
import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { MenuItem, SidebarMenu } from '@/ui'
import { useRouter } from 'next/router'

import s from './mobile-sidebar-menu-with-items.module.scss'

export const MobileSidebarMenuWithItems = () => {
  const { pathname } = useRouter()
  const { data, isLoading } = useGetMeQuery()

  return (
    <SidebarMenu className={s.sidebar}>
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
        href={menuNavigation.profile(data?.userId)}
        icon={ProfileMenuIcon}
        isSelected={pathname.startsWith(menuNavigation.profile(data?.userId))}
        isStyled={false}
      />
    </SidebarMenu>
  )
}
