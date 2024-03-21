import { MouseEventHandler } from 'react'

import {
  FavouritesMenuIcon,
  LogOutMenuIcon,
  SettingIcon,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { menuNavigation } from '@/app/constants'
import { useSignOutMutation } from '@/app/services/auth/auth.api'
import { DropdownMenu, MenuItem } from '@/ui'

export const DropdownMenuWithItems = () => {
  const [logOut] = useSignOutMutation()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const onLogOut: MouseEventHandler<HTMLButtonElement> = e => logOut()

  return (
    <DropdownMenu>
      <MenuItem
        href={menuNavigation.settings()}
        icon={SettingIcon}
        isStyled={false}
        label={labels.setting}
      />
      <MenuItem href={'#'} icon={StatisticsMenuIcon} isStyled={false} label={labels.statistics} />

      <MenuItem
        href={menuNavigation.favorites()}
        icon={FavouritesMenuIcon}
        isStyled={false}
        label={labels.favorites}
      />
      <MenuItem
        as={'button'}
        icon={LogOutMenuIcon}
        isStyled={false}
        label={labels.logout}
        onClick={onLogOut}
      />
    </DropdownMenu>
  )
}
