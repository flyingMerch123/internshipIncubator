export const paymentsApiUrls = {
  canceledAutoRenewal: () => `/api/v1/subscriptions/canceled-auto-renewal` as const,
  costOfSubscriptions: () => `api/v1/subscriptions/cost-of-subscriptions` as const,
  createSubscriptions: () => `/api/v1/subscriptions` as const,
  currentSubscriptions: () => `api/v1/subscriptions/current-subscriptions` as const,
  myPayments: () => `/api/v1/subscriptions/my-payments` as const,
}
