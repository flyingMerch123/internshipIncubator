import { PropsWithChildren } from 'react'

import * as RadioSelect from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radio-container.module.scss'

type RadioContainerProps = {
  defaultValue: any
  dir?: 'ltr' | 'rtl'
  disabled?: boolean
  loop?: boolean
  name?: string
  onValueChange?: (value: any) => void
  required?: boolean
  value?: string
}
export const RadioContainer = ({
  children,
  defaultValue,
  disabled,
  ...props
}: PropsWithChildren<RadioContainerProps>) => {
  const styles = clsx(s.root, disabled && s.disabled)

  return (
    <form>
      <RadioSelect.Root
        aria-label={'View density'}
        className={styles}
        defaultValue={defaultValue}
        {...props}
      >
        {children}
      </RadioSelect.Root>
    </form>
  )
}
