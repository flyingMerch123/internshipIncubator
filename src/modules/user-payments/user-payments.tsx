import { useState } from 'react'

import { useMyPaymentsQuery } from '@/app/services/payments/payments.api'
import { PaymentsTable } from '@/components/payments-table/payments-table'
import { PAYMENTS_TABLE_COLUMNS } from '@/modules/user-payments/constants'
import { Pagination } from '@/ui/pagination'

export const UserPayments = () => {
  const [currenPage, setCurrentPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<string>('7')
  const { data: myPayments } = useMyPaymentsQuery()

  const startIndex = (currenPage - 1) * +pageSize
  const endIndex = startIndex + +pageSize
  const paginatedData = myPayments?.slice(startIndex, endIndex)

  return (
    <>
      <PaymentsTable columns={PAYMENTS_TABLE_COLUMNS} data={paginatedData} />
      <Pagination
        currentPage={currenPage}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
        pageSize={+pageSize}
        siblingCount={3}
        totalCount={myPayments?.length || 0}
      />
    </>
  )
}
