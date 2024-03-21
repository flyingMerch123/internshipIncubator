import { useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { TabsContainer, TabsItem, TabsList } from '@/ui'
import { useRouter } from 'next/router'

export const SettingsTabs = () => {
  const { pathname, push } = useRouter()

  const { t } = useTranslation()
  const { accountManagement, devices, generalInformation, myPayments } =
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
