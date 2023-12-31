import { FC, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'
import { usePagination } from './usePagination'

import { ChevronLeft, ChevronRight, useTranslation } from '@/app'
import { Select, Typography } from '@/ui'
import { ROWS_PER_PAGE } from '@/ui/pagination/constants'
import { SelectVariant } from '@/ui/select/select-types'

export type PaginationPropsType = {
  currentPage: number
  totalCount: number
  pageSize: number
  siblingCount: number
  className?: string
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: string) => void
}
export const Pagination: FC<PaginationPropsType> = props => {
  const {
    t: { pagination },
  } = useTranslation()

  const {
    onPageSizeChange,
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props
  const DOTS = '\u2026'
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    DOTS,
  })

  const lastPage = paginationRange[paginationRange.length - 1]
  const disabledLeft = currentPage === 1
  const disableRight = currentPage === lastPage

  const leftTabIndex = disabledLeft ? -1 : 0
  const rightTabIndex = disableRight ? -1 : 0

  const cNames = {
    container: clsx(s.container),
    pages: clsx(s.pages),
    page: clsx(s.page),
    leftArrow: clsx(s.page, disabledLeft && s.disabled),
    rightArrow: clsx(s.page, disableRight && s.disabled),
    dots: clsx(s.page, s.dots),
    rowsPerPage: clsx(s.rowsPerPage),
    select: clsx(s.select),
  }

  if (currentPage === 0 || paginationRange.length < 1) {
    return null
  }

  const onNext = () => {
    !disableRight && onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    !disabledLeft && onPageChange(currentPage - 1)
  }
  const onKeyDownSpaceLeft = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onPrevious()
    }
  }
  const onKeyDownSpaceRight = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onNext()
    }
  }
  const pages = paginationRange.map((pageNumber, index) => {
    const activePage = clsx(s.page, currentPage === pageNumber && s.active)
    const setActivePage = () => {
      onPageChange(+pageNumber)
    }
    const onKeyDownSpace = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Space') {
        onPageChange(+pageNumber)
      }
    }

    return pageNumber === DOTS ? (
      <div key={index} className={cNames.dots}>
        <Typography variant={'regular-14'}>{DOTS}</Typography>
      </div>
    ) : (
      <div
        tabIndex={0}
        key={index}
        onKeyDown={onKeyDownSpace}
        className={activePage}
        onClick={setActivePage}
      >
        {pageNumber}
      </div>
    )
  })

  return (
    <div className={cNames.container}>
      <div className={cNames.pages}>
        <div
          tabIndex={leftTabIndex}
          className={cNames.leftArrow}
          onKeyDown={onKeyDownSpaceLeft}
          onClick={onPrevious}
        >
          <ChevronLeft />
        </div>
        {pages}
        <div
          tabIndex={rightTabIndex}
          className={cNames.rightArrow}
          onKeyDown={onKeyDownSpaceRight}
          onClick={onNext}
        >
          <ChevronRight />
        </div>
      </div>
      <div className={cNames.rowsPerPage}>
        <Typography variant={'regular-14'}>{pagination.show}</Typography>
        <Select
          className={cNames.select}
          value={pageSize}
          options={ROWS_PER_PAGE}
          onChange={onPageSizeChange}
          variant={SelectVariant.Pagination}
        />
        <Typography variant={'regular-14'}>{pagination.onPage}</Typography>
      </div>
    </div>
  )
}
