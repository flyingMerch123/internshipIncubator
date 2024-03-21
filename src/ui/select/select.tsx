import { ArrowDownIcon } from '@/app/'
import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { SelectModel, SelectVariant } from './select-types'

const IconSize = {
  [SelectVariant.Language]: 24,
  [SelectVariant.LanguageMobile]: 24,
  [SelectVariant.Pagination]: 16,
  [SelectVariant.Primary]: 24,
} as const

export const Select = ({
  className,
  disabled,
  label,
  onChange,
  open,
  options,
  placeholder,
  rootClassName,
  value,
  variant = SelectVariant.Primary,
  width,
}: SelectModel) => {
  const classNames = {
    content: clsx(s.content, s[variant]),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item, s[variant]),
    label: clsx(s.label, disabled && s.disabled),
    root: rootClassName,
    trigger: clsx(s.trigger, s[variant], className),
  }
  const withoutPlaceholder = variant === SelectVariant.Pagination ? value : 'Select Box'
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
              <ArrowDownIcon size={IconSize[variant]} />
            </SelectRadix.Icon>
          </SelectRadix.Trigger>
          <SelectRadix.Portal>
            <SelectRadix.Content className={classNames.content} position={'popper'}>
              {options?.map((option, index) => {
                const { label, value } =
                  typeof option === 'string' ? { label: option, value: option } : option

                return (
                  <SelectRadix.Item className={classNames.item} key={index} value={value}>
                    {label}
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
