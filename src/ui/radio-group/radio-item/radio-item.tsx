import { Label } from '@/ui'
import * as RadioSelect from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-item.module.scss'

type RadioItemProps = {
  disabled?: boolean
  id?: any
  label?: string
  value: string
}

export const RadioItem = ({ disabled, id, value }: RadioItemProps) => {
  const styles = {
    indicator: clsx(s.indicator),
    item: clsx(s.item),
    root: clsx(s.wrapper, disabled && s.disabled),
  }

  return (
    <div className={styles.root}>
      <RadioSelect.Item className={styles.item} disabled={disabled} id={id} value={id}>
        <RadioSelect.Indicator className={styles.indicator} />
      </RadioSelect.Item>
      {value && <Label id={id} title={value} />}
    </div>
  )
}
