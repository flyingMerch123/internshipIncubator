import { ComponentProps } from 'react'

export type TableHeaderModel = {
  key: string
  sortable?: boolean
  title: string
}

export type Sort = {
  columnKey: string
  direction: 'asc' | 'desc'
} | null

// export type HeadProps = Omit<
//   ComponentPropsWithoutRef<'thead'> & {
//     columns: TableHeaderModel[]
//     sort?: Sort
//     onSort?: (sort: Sort) => void
//   },
//   'children'
// >
export type HeadProps = ComponentProps<'thead'>
export type TableProps = ComponentProps<'table'>
export type RowProps = ComponentProps<'tr'>
export type BodyProps = ComponentProps<'tbody'>
export type DataCellProps = ComponentProps<'td'>
export type HeadCellProps =
  //     {
  //   minWidth?: number
  //   title?: string
  //   columnKey?: string
  //   sort?: Sort
  //   onClick?: (sortDirection: string) => void
  //   sortable?: boolean
  // } &
  ComponentProps<'th'>
