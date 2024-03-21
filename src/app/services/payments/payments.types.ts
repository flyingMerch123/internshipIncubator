export type CreateSubscriptions = {
  amount: number
  baseUrl: string
  paymentType: 'PAYPAL' | 'STRIPE'
  typeSubscription: 'DAY' | 'MONTHLY' | 'WEEKLY'
}

export type CostOfSubscriptions = {
  data: CostOfSubscriptionsData[]
}
export type CostOfSubscriptionsData = {
  amount: number
  typeDescription: string
}
export type SubscriptionOptions = {
  amount: number
  disabled?: boolean
  id: number
  typeSubscription: 'DAY' | 'MONTHLY' | 'WEEKLY'
  value: string
}

export type CurrentSubscription = {
  data: CurrentSubscriptionTypeData[]
  hasAutoRenewal: boolean
}
export type CurrentSubscriptionTypeData = {
  autoRenewal: boolean
  dateOfPayment: string
  endDateOfSubscription: string
  subscriptionId: string
  userId: number
}

export type SubscriptionDuration = 'DAY' | 'MONTHLY' | 'WEEKLY'

export type MyPayments = {
  dateOfPayment: string
  endDateOfSubscription: string
  paymentType: 'PAYPAL' | 'STRIPE'
  price: number
  subscriptionId: string
  subscriptionType: SubscriptionDuration
  userId: number
}
