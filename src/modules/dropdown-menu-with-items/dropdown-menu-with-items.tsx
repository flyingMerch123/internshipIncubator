import { useRouter } from 'next/router'

import {
  FavouritesMenuIcon,
  LogOutMenuIcon,
  SettingIcon,
  StatisticsMenuIcon,
  useTranslation,
} from '@/app'
import { menuNavigation } from '@/app/constants'
import { DropdownMenu, MenuItem } from '@/ui'

export const DropdownMenuWithItems = () => {
  const { pathname } = useRouter()

  const { t } = useTranslation()
  const labels = t.sidebarMenu

  return (
    <DropdownMenu>
      <MenuItem
        href={menuNavigation.settings()}
        icon={SettingIcon}
        label={labels.setting}
        isStyled={false}
      />
      <MenuItem href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} isStyled={false} />

      <MenuItem
        href={menuNavigation.favorites()}
        icon={FavouritesMenuIcon}
        label={labels.favorites}
        isStyled={false}
      />
      <MenuItem
        as={'button'}
        onClick={() => console.log('Logged Out!')}
        icon={LogOutMenuIcon}
        label={labels.logout}
        isStyled={false}
      />
    </DropdownMenu>
  )
}
