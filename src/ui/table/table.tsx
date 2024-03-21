import {
  BodyProps,
  DataCellProps,
  HeadCellProps,
  HeadProps,
  RowProps,
  TableProps,
} from '@/ui/table/tabel-types'

const Root = (props: TableProps) => {
  return <table {...props} />
}
const Head = (props: HeadProps) => {
  return <thead {...props} />
}
const HeadCell = (props: HeadCellProps) => {
  return <th {...props} />
}

const Row = (props: RowProps) => {
  return <tr {...props} />
}
const Body = (props: BodyProps) => {
  return <tbody {...props} />
}
const DataCell = (props: DataCellProps) => {
  return <td {...props} />
}

export const Table = { Body, DataCell, Head, HeadCell, Root, Row }
