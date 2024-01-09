import { useId } from 'react'

import * as RadioSelect from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-item.module.scss'

import { Label } from '@/ui'

type RadioItemProps = {
  value: string
  disabled?: boolean
  label?: string
}

export const RadioItem = ({ value, label, disabled }: RadioItemProps) => {
  const id = useId()

  const styles = {
    root: clsx(s.wrapper, disabled && s.disabled),
    item: clsx(s.item),
    indicator: clsx(s.indicator),
  }

  return (
    <div className={styles.root}>
      <RadioSelect.Item className={styles.item} value={value} id={id} disabled={disabled}>
        <RadioSelect.Indicator className={styles.indicator} />
      </RadioSelect.Item>
      {label && <Label title={label} id={id} />}
    </div>
  )
}
