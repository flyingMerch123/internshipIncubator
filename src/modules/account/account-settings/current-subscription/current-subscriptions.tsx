import { useTranslation } from '@/app'
import { subscriptionDate } from '@/app/helpers/customizeDate'
import {
  useCanceledAutoRenewalMutation,
  useMyPaymentsQuery,
} from '@/app/services/payments/payments.api'
import { CurrentSubscription } from '@/app/services/payments/payments.types'
import { Card, Checkbox, Typography } from '@/ui'

import s from '@/modules/account/account-settings/current-subscription/current-subscriptions.module.scss'

type Props = {
  currentSubscriptions?: CurrentSubscription
}
export const CurrentSubscriptions = ({ currentSubscriptions }: Props) => {
  const [canceledAutoRenewal] = useCanceledAutoRenewalMutation()
  const { data: myPayments } = useMyPaymentsQuery()

  const { t } = useTranslation()
  const { autoRenewal, current, expireAt, nextPayment } = t.account
  const canceledAutoRenewalHandler = () => {
    canceledAutoRenewal()
  }

  return (
    <div className={s.container}>
      <Typography as={'h3'} variant={'h3'}>
        {current}:
      </Typography>

      <Card className={s.currentSubscriptionCard}>
        <div>
          <Typography as={'h3'} className={s.text} variant={'regular-14'}>
            {expireAt}
          </Typography>
          <Typography as={'h3'} variant={'regular-14'}>
            {myPayments &&
              subscriptionDate(myPayments[myPayments.length - 1].endDateOfSubscription)}
          </Typography>
        </div>
        <div>
          <Typography as={'h3'} className={s.text} variant={'regular-14'}>
            {nextPayment}
          </Typography>
          <Typography as={'h3'} variant={'regular-14'}>
            {subscriptionDate(currentSubscriptions?.data[0]?.endDateOfSubscription)}
          </Typography>
        </div>
      </Card>
      <Checkbox
        checked={currentSubscriptions?.hasAutoRenewal}
        className={s.checkBox}
        labelTitle={autoRenewal}
        onChange={canceledAutoRenewalHandler}
      />
    </div>
  )
}
