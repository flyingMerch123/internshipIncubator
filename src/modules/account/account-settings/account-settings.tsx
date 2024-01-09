import { useState } from 'react'

import s from './account-settings.module.scss'
import { PAYMENT_OPTIONS, PROFILE_TYPE } from './data'

import { PaypalIcon, StripeIcon } from '@/app'
import { Card, RadioContainer, RadioItem, Typography } from '@/ui'

export const AccountSettings = () => {
  // Added state for demonstration purposes of flow
  const [accountType, setAccountType] = useState('')
  const hasPaymentAccess = accountType === 'business'

  return (
    <section className={s.container}>
      <div>
        <Typography as={'h3'} variant={'h3'}>
          Account type:
        </Typography>

        <Card className={s.card}>
          <RadioContainer defaultValue={'personal'} onValueChange={value => setAccountType(value)}>
            {PROFILE_TYPE.map(item => (
              <RadioItem key={item.value} {...item} />
            ))}
          </RadioContainer>
        </Card>
      </div>

      {hasPaymentAccess && (
        <div className={s.wrapper}>
          <Typography as={'h3'} variant={'h3'}>
            Your subscription costs:
          </Typography>

          <Card className={s.card}>
            <RadioContainer defaultValue={'10'}>
              {PAYMENT_OPTIONS.map(option => (
                <RadioItem key={option.value} {...option} />
              ))}
            </RadioContainer>
          </Card>

          <div className={s.payment}>
            <PaypalIcon />
            <Typography>Or</Typography>
            <StripeIcon />
          </div>
        </div>
      )}
    </section>
  )
}
