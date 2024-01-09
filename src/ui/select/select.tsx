import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import { SelectModel, SelectVariant } from './select-types'
import s from './select.module.scss'

import { ArrowDownIcon } from '@/app/'

const IconSize = {
  [SelectVariant.Pagination]: 16,
  [SelectVariant.Primary]: 24,
  [SelectVariant.Language]: 24,
  [SelectVariant.LanguageMobile]: 24,
} as const

export const Select = ({
  variant = SelectVariant.Primary,
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
}: SelectModel) => {
  const classNames = {
    root: rootClassName,
    trigger: clsx(s.trigger, s[variant], className),
    icon: clsx(s.icon, s[variant]),
    item: clsx(s.item, s[variant]),
    content: clsx(s.content, s[variant]),
    label: clsx(s.label, disabled && s.disabled),
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
                const { value, label } =
                  typeof option === 'string' ? { value: option, label: option } : option

                return (
                  <SelectRadix.Item value={value} className={classNames.item} key={index}>
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
