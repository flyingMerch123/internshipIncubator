import { TableHeaderModel } from '@/ui/table/tabel-types'

export const PAYMENTS_TABLE_COLUMNS: TableHeaderModel[] = [
  {
    key: 'dateOfPayment',
    title: 'Date of Payment',
    sortable: false,
  },
  {
    key: 'endDateOfSub',
    title: 'End date of subscription',
    sortable: false,
  },
  {
    key: 'price',
    title: 'Price',
    sortable: false,
  },
  {
    key: 'subscriptionType',
    title: 'Subscription Type',
    sortable: false,
  },
  {
    key: 'paymentType',
    title: 'Payment Type',
    sortable: false,
  },
]
