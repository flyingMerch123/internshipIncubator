import { PropsWithChildren } from 'react'

import * as RadioSelect from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-container.module.scss'

type RadioContainerProps = {
  defaultValue: any
  value?: string
  onValueChange?: (value: any) => void
  name?: string
  disabled?: boolean
  required?: boolean
  loop?: boolean
  dir?: 'ltr' | 'rtl'
}
export const RadioContainer = ({
  defaultValue,
  disabled,
  children,
  ...props
}: PropsWithChildren<RadioContainerProps>) => {
  const styles = clsx(s.root, disabled && s.disabled)

  console.log(defaultValue)

  return (
    <form>
      <RadioSelect.Root
        className={styles}
        defaultValue={defaultValue}
        aria-label="View density"
        {...props}
      >
        {children}
      </RadioSelect.Root>
    </form>
  )
}
