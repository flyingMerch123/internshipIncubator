import { ReactElement } from 'react'

import { UserPayments } from '@/modules/user-payments'
import { ProfileSettingLayout } from '@/templates'

const Payments = () => {
  return <UserPayments />
}

Payments.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}
export default Payments
