import { FC, ReactNode, useId } from 'react'

import { CheckIcon } from '@/app/assets/svg'
import { Typography } from '@/ui'
import { Label } from '@/ui/label'
import * as CheckboxRDX from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  labelTitle?: ReactNode | string
  left?: boolean
  onChange?: (checked: boolean) => void
  required?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  className,
  disabled,
  id,
  labelTitle,
  left,
  onChange,
  required,
}) => {
  const fallbackId = useId()

  const styles = {
    checkbox: s.checkbox,
    container: clsx(s.container, disabled && s.disabled),
    indicator: clsx(s.indicator),
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, left && s.left, className),
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <CheckboxRDX.Root
          checked={checked}
          className={styles.checkbox}
          disabled={disabled}
          id={id || fallbackId}
          onCheckedChange={onChange}
          required={required}
        >
          <CheckboxRDX.Indicator className={styles.indicator}>
            <CheckIcon />
          </CheckboxRDX.Indicator>
        </CheckboxRDX.Root>
      </div>

      {labelTitle && (
        <Label id={id || fallbackId}>
          <Typography className={styles.label}>{labelTitle}</Typography>
        </Label>
      )}
    </div>
  )
}
