import { clsx } from 'clsx'

import styles from './page-button.module.scss'

import { Typography } from '@/ui/typography/typography'

type PageButtonProps = {
  onClick: () => void
  disabled?: boolean
  page: number
  selected: boolean
}

export const PageButton = ({ onClick, disabled, selected, page }: PageButtonProps) => {
  const classNames = {
    item: styles.item,
    pageButton(selected?: boolean) {
      return clsx(this.item, selected && styles.selected)
    },
  }

  return (
    <button
      onClick={onClick}
      disabled={selected || disabled}
      className={classNames.pageButton(selected)}
    >
      <Typography className={styles.text} variant="regular-14">
        {page}
      </Typography>
    </button>
  )
}
