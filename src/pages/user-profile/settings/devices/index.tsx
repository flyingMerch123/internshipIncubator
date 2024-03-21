import { ReactElement } from 'react'

import { UserDevices } from '@/modules'
import { ProfileSettingLayout } from '@/templates'

const Devices = () => {
  return <UserDevices />
}

Devices.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}
export default Devices
