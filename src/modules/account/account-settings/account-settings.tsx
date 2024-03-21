import { useEffect, useState } from 'react'

import { Nullable, PaypalIcon, StripeIcon, useDisclose, useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { FRONT_BASE_URL, PAYMENT_TYPE } from '@/app/constants/common'
import { subscriptionDate } from '@/app/helpers/customizeDate'
import {
  useCanceledAutoRenewalMutation,
  useCostOfSubscriptionsQuery,
  useCreateSubscriptionsMutation,
  useCurrentSubscriptionsQuery,
  useMyPaymentsQuery,
} from '@/app/services/payments/payments.api'
import { SubscriptionDuration, SubscriptionOptions } from '@/app/services/payments/payments.types'
import { PaymentsModal } from '@/components/modals/payments-modal'
import { CurrentSubscriptions } from '@/modules/account/account-settings/current-subscription'
import { Card, RadioContainer, RadioItem, Typography } from '@/ui'
import { useRouter } from 'next/router'

import s from './account-settings.module.scss'

export const AccountSettings = () => {
  // Added state for demonstration purposes of flow
  const [subscriptionId, setSubscriptionId] = useState<number>(0)
  const [subscriptionOptions, setSubscriptionOptions] =
    useState<Nullable<SubscriptionOptions[]>>(null)
  const [createSubscriptions] = useCreateSubscriptionsMutation()
  const { data: costOfSubscription } = useCostOfSubscriptionsQuery()
  const { data: currentSubscriptions } = useCurrentSubscriptionsQuery()
  const { isOpen, onClose, onOpen } = useDisclose()

  console.log(currentSubscriptions)
  const { t } = useTranslation()
  const { query } = useRouter()
  const {
    accountType,
    business,
    month,
    oneDay,
    or,
    per,
    personal,
    sevenDays,
    yourSubscriptionCosts,
  } = t.account
  const PROFILE_TYPE = [
    { id: 1, label: 'personal', value: `${personal}` },
    { id: 2, label: 'business', value: `${business}` },
  ]
  const [accountTypeId, setAccountTypeId] = useState<number>(PROFILE_TYPE[0].id)

  const hasPaymentAccess = accountTypeId === PROFILE_TYPE[1].id

  const paymentsHandler = (paymentType: keyof typeof PAYMENT_TYPE) => {
    subscriptionOptions &&
      createSubscriptions({
        amount: subscriptionOptions[subscriptionId].amount,
        baseUrl: `${FRONT_BASE_URL}/${menuNavigation.account()}` ?? '',
        paymentType: paymentType,
        typeSubscription: subscriptionOptions[subscriptionId].typeSubscription,
      })
        .unwrap()
        .then(res => {
          window.location.assign(res.url)
        })
  }

  const payments = {
    [PAYMENT_TYPE.PAYPAL]: () => paymentsHandler(PAYMENT_TYPE.PAYPAL),
    [PAYMENT_TYPE.STRIPE]: () => paymentsHandler(PAYMENT_TYPE.STRIPE),
  }

  useEffect(() => {
    if (costOfSubscription) {
      const subscriptions = costOfSubscription.data.map((cost, index) => {
        const duration = [`${oneDay}`, `${sevenDays}`, `${month}`]

        return {
          amount: cost.amount,
          id: index,
          typeSubscription: cost.typeDescription as SubscriptionDuration,
          value: `$${cost.amount} ${per} ${duration[index]}`,
        }
      })

      setSubscriptionId(subscriptions[0].id)
      setSubscriptionOptions(subscriptions)
    }
  }, [costOfSubscription])

  useEffect(() => {
    if (query.success || query.token) {
      onOpen()
    }
  }, [query.success, query.token, query])

  return (
    <section className={s.container}>
      {currentSubscriptions && currentSubscriptions.data.length > 0 && (
        <CurrentSubscriptions currentSubscriptions={currentSubscriptions} />
      )}

      <div>
        <Typography as={'h3'} variant={'h3'}>
          {accountType}:
        </Typography>

        <Card className={s.card}>
          <RadioContainer
            defaultValue={PROFILE_TYPE[0].id}
            onValueChange={value => setAccountTypeId(value)}
          >
            {PROFILE_TYPE.map(item => (
              <RadioItem key={item.value} {...item} />
            ))}
          </RadioContainer>
        </Card>
      </div>

      {hasPaymentAccess && (
        <div className={s.wrapper}>
          <Typography as={'h3'} variant={'h3'}>
            {yourSubscriptionCosts}:
          </Typography>

          <Card className={s.card}>
            <RadioContainer
              defaultValue={subscriptionOptions && subscriptionOptions[0].id}
              onValueChange={value => setSubscriptionId(value)}
            >
              {subscriptionOptions?.map(option => <RadioItem key={option.amount} {...option} />)}
            </RadioContainer>
          </Card>

          <div className={s.payment}>
            <PaypalIcon onClick={payments[PAYMENT_TYPE.PAYPAL]} />
            <Typography>{or}</Typography>
            <StripeIcon onClick={payments[PAYMENT_TYPE.STRIPE]} />
          </div>
        </div>
      )}
      <PaymentsModal
        isOpen={isOpen}
        isSuccess={query.success === 'true' || query.PayerID}
        onClose={onClose}
      />
    </section>
  )
}
