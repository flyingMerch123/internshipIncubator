import { paymentsApiUrls } from '@/app/constants/routes/payments'
import { commonApi } from '@/app/services/common/common.api'
import {
  CostOfSubscriptions,
  CreateSubscriptions,
  CurrentSubscription,
  MyPayments,
} from '@/app/services/payments/payments.types'

const {
  canceledAutoRenewal,
  costOfSubscriptions,
  createSubscriptions,
  currentSubscriptions,
  myPayments,
} = paymentsApiUrls

export const paymentsApi = commonApi.injectEndpoints({
  endpoints: builder => ({
    canceledAutoRenewal: builder.mutation<void, void>({
      invalidatesTags: ['Subscriptions'],
      query: () => ({
        method: 'POST',
        url: canceledAutoRenewal(),
      }),
    }),
    costOfSubscriptions: builder.query<CostOfSubscriptions, void>({
      providesTags: ['Subscriptions'],
      query: () => ({
        method: 'GET',
        url: costOfSubscriptions(),
      }),
    }),
    createSubscriptions: builder.mutation<{ url: string }, CreateSubscriptions>({
      query: body => ({
        body,
        method: 'POST',
        url: createSubscriptions(),
      }),
    }),
    currentSubscriptions: builder.query<CurrentSubscription, void>({
      providesTags: ['Subscriptions'],
      query: () => ({
        method: 'GET',
        url: currentSubscriptions(),
      }),
    }),
    myPayments: builder.query<MyPayments[], void>({
      providesTags: ['Subscriptions'],
      query: () => ({
        method: 'GET',
        url: myPayments(),
      }),
    }),
  }),
})

export const {
  useCanceledAutoRenewalMutation,
  useCostOfSubscriptionsQuery,
  useCreateSubscriptionsMutation,
  useCurrentSubscriptionsQuery,
  useMyPaymentsQuery,
} = paymentsApi
