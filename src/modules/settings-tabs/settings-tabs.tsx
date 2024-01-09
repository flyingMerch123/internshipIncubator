import { useRouter } from 'next/router'

import { useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { TabsContainer, TabsItem, TabsList } from '@/ui'

export const SettingsTabs = () => {
  const { push, pathname } = useRouter()

  const { t } = useTranslation()
  const { generalInformation, devices, accountManagement, myPayments } =
    t.profileSettings.navigation

  return (
    <TabsContainer defaultValue={pathname} onValueChange={route => push(route)}>
      <TabsList fullWidth>
        <TabsItem value={menuNavigation.settings()}>{generalInformation}</TabsItem>
        <TabsItem value={menuNavigation.devices()}>{devices}</TabsItem>
        <TabsItem value={menuNavigation.account()}>{accountManagement}</TabsItem>
        <TabsItem value={menuNavigation.payments()}>{myPayments}</TabsItem>
      </TabsList>
    </TabsContainer>
  )
}
