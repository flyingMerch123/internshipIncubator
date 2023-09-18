import { ComponentPropsWithoutRef, CSSProperties, FC, ReactElement } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { ArrowDownIcon } from '@/app/assets/arrow-down-icon'

export type Option = { label: string | ReactElement; value: string }

type CommonProps = {
  value: string | ReactElement
  placeholder?: string | ReactElement
  variant?: 'primary' | 'pagination' | 'language'
  options: Array<Option>
  label?: string
  width?: CSSProperties['width']
  rootClassName?: string
  open?: boolean
  onChange: (value: string) => void
}
type ConditionalMultipleProps =
  | { onChange: (value: string) => void }
  | { onChange: (value: number) => void }

export type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, keyof CommonProps> &
  CommonProps &
  ConditionalMultipleProps
export const Select: FC<SelectProps> = ({
  variant = 'primary',
  placeholder,
  value,
  disabled,
  className,
  onChange,
  options,
  label,
  rootClassName,
  width,
  open,
}) => {
  const IconSize = {
    Small: 16,
    Large: 24,
  } as const
  const classNames = {
    root: rootClassName,
    trigger: clsx(s.trigger, s[variant], className),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item, s[variant]),
    content: clsx(s.content, s[variant]),
    label: clsx(s.label, disabled && s.disabled),
  }
  const withoutPlaceholder = variant === 'pagination' ? value : 'Select Box'
  const rootStyles = { width }

  return (
    <div className={classNames.root}>
      <SelectRadix.Group>
        <SelectRadix.Label className={classNames.label}>{label}</SelectRadix.Label>
        <SelectRadix.Root disabled={disabled} onValueChange={onChange} open={open}>
          <SelectRadix.Trigger className={classNames.trigger} style={rootStyles}>
            <SelectRadix.Value placeholder={placeholder || withoutPlaceholder}>
              {value}
            </SelectRadix.Value>
            <SelectRadix.Icon className={classNames.icon}>
              <ArrowDownIcon size={variant === 'pagination' ? IconSize.Small : IconSize.Large} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>

          <SelectRadix.Portal>
            <SelectRadix.Content className={classNames.content} position={'popper'}>
              {options.map(option => {
                return (
                  <SelectRadix.Item
                    asChild={true}
                    value={option.value}
                    className={classNames.item}
                    key={`${option.value}`}
                  >
                    {<span>{option.label}</span>}
                  </SelectRadix.Item>
                )
              })}
            </SelectRadix.Content>
          </SelectRadix.Portal>
        </SelectRadix.Root>
      </SelectRadix.Group>
    </div>
  )
}
