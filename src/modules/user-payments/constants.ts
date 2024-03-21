import { TableHeaderModel } from '@/ui/table/tabel-types'

export const PAYMENTS_TABLE_COLUMNS: TableHeaderModel[] = [
  {
    key: 'dateOfPayment',
    sortable: false,
    title: 'Date of Payment',
  },
  {
    key: 'endDateOfSub',
    sortable: false,
    title: 'End date of subscription',
  },
  {
    key: 'price',
    sortable: false,
    title: 'Price',
  },
  {
    key: 'subscriptionType',
    sortable: false,
    title: 'Subscription Type',
  },
  {
    key: 'paymentType',
    sortable: false,
    title: 'Payment Type',
  },
]
