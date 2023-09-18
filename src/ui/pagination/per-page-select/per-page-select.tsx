import styles from './per-page-select.module.scss'

import { Select } from '@/ui/select'
import { Typography } from '@/ui/typography/typography'

export type PerPageSelectProps = {
  perPage: number
  perPageOptions: number[]
  onPerPageChange: (itemPerPage: number) => void
}

export const PerPageSelect = ({ perPage, perPageOptions, onPerPageChange }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value.toString(),
    value: value.toString(),
  }))

  return (
    <div className={styles.selectBox}>
      <Typography variant="regular-14">Show</Typography>
      <Select
        className={styles.select}
        value={perPage.toString()}
        options={selectOptions}
        onChange={onPerPageChange}
        variant="pagination"
      />
      <Typography variant="regular-14">on page</Typography>
    </div>
  )
}
