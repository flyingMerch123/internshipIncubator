import { useState } from 'react'

import { Meta } from '@storybook/react'

import { VerticalContainer } from '@/components/storybook-utils/components/containers/vertical'
import { ValuePreview } from '@/components/storybook-utils/components/previews'
import { Pagination } from '@/ui/pagination/pagination'

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(8)
  const TOTAL_PAGES_COUNT = 10

  return (
    <VerticalContainer>
      <Pagination
        onChange={setPage}
        count={TOTAL_PAGES_COUNT}
        page={page}
        perPage={perPage}
        perPageOptions={[5, 8, 12, 100]}
        onPerPageChange={setPerPage}
      />
      <ValuePreview>Current page: {page}</ValuePreview>
      <ValuePreview>Per page: {perPage}</ValuePreview>
    </VerticalContainer>
  )
}

export const DefaultWithTwoPages = () => {
  const [page, setPage] = useState(1)
  const TOTAL_PAGE_COUNT = 2

  return (
    <VerticalContainer>
      <Pagination onChange={setPage} count={TOTAL_PAGE_COUNT} page={page} />
      <ValuePreview>Current page: {page}</ValuePreview>
    </VerticalContainer>
  )
}

export const DefaultWithOnePages = () => {
  const [page, setPage] = useState(1)
  const TOTAL_PAGE_COUNT = 1

  return (
    <VerticalContainer>
      <Pagination onChange={setPage} count={TOTAL_PAGE_COUNT} page={page} />
      <ValuePreview>Current page: {page}</ValuePreview>
    </VerticalContainer>
  )
}
