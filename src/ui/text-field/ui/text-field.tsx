import { forwardRef, useState } from 'react'

import { HideIcon, SearchIcon, ShowIcon } from '@/app/assets/svg'
import { Typography } from '@/ui/typography/typography'
import { clsx } from 'clsx'

import s from '../lib/styles/text-field.module.scss'

import { INPUT_TYPES } from '../lib/constants/input-type-enum'
import { InputProps } from '../model/text-field-types'

export const TextField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, error, inputType = 'text', label, required = false, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false)

    const textFieldNames = ['userName', 'email', 'password', 'confirmPassword']

    const classNames = {
      container: clsx(s.inputContainer),
      error: clsx(error && s.error),
      input: clsx(s.input, s[`${inputType}`], error && s.inputError),
      label: clsx(s.label),
      leftIcon: clsx(s.leftIcon),
      rightIcon: clsx(s.rightIcon),
      root: clsx(s.root, className, disabled && s.disabled),
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (rest.name ? textFieldNames.includes(rest.name) : false) {
        if (event.key === ' ' || event.code === 'Space') {
          event.preventDefault()
        }
      }
    }
    const showHidePassword = () => {
      if (!disabled) {
        setShowPassword(!showPassword)
      }
    }

    const rightIcon = inputType === INPUT_TYPES.PASSWORD && (
      <button
        className={s.rightIcon}
        disabled={disabled}
        onClick={showHidePassword}
        type={'button'}
      >
        {showPassword ? <HideIcon /> : <ShowIcon />}
      </button>
    )

    const leftIcon = inputType === INPUT_TYPES.SEARCH && (
      <div className={classNames.leftIcon} id={'left-icon'}>
        {<SearchIcon />}
      </div>
    )
    const type = showPassword && inputType === INPUT_TYPES.PASSWORD ? INPUT_TYPES.TEXT : inputType

    return (
      <div className={classNames.root}>
        {label && (
          <Typography className={classNames.label}>
            {label}
            {required && <span className={s.required}>*</span>}
          </Typography>
        )}
        <div className={classNames.container}>
          <input
            aria-label={label}
            className={classNames.input}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            ref={ref}
            type={type}
            {...rest}
          />
          {leftIcon}
          {rightIcon}
        </div>
        {error && <Typography className={classNames.error}>{error}</Typography>}
      </div>
    )
  }
)
