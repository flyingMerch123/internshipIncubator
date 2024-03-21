import { ReactElement } from 'react'

import { AccountSettings } from '@/modules'
import { ProfileSettingLayout } from '@/templates'

const AccountManagement = () => {
  return <AccountSettings />
}

AccountManagement.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}
export default AccountManagement
