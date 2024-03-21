import { ComponentPropsWithoutRef, KeyboardEventHandler, forwardRef, useRef } from 'react'

import { clsx } from 'clsx'

import s from './file-input.module.scss'

type FileInputProps = {
  accept?: string | string[]
  className?: string
  label?: string
  onUpload?: () => void
}

type CustomFileInputType = FileInputProps &
  Omit<ComponentPropsWithoutRef<'input'>, keyof FileInputProps>

export const FileInput = forwardRef<HTMLFormElement, CustomFileInputType>(
  (
    {
      accept,
      children,
      className,
      disabled,
      id = 'file-input',
      label = 'Select from Computer',
      name = 'file',
      onUpload,
      ...props
    }: CustomFileInputType,
    ref
  ) => {
    const labelRef = useRef<HTMLLabelElement>(null)
    const fileFormat = Array.isArray(accept) ? accept.join(', ') : accept

    const styles = {
      form: className,
      label: clsx(s.label, disabled && s.disabled),
    }

    const handleOnKeyDown: KeyboardEventHandler<HTMLLabelElement> = e => {
      if (e.code === 'Space' || e.code === 'Enter') {
        labelRef?.current?.click()
      }
    }

    return (
      <form className={styles.form} ref={ref}>
        <label
          className={styles.label}
          htmlFor={id}
          onKeyDown={handleOnKeyDown}
          ref={labelRef}
          tabIndex={0}
        >
          {label}
        </label>

        <input
          accept={fileFormat}
          className={s.input}
          disabled={disabled}
          id={id}
          name={name}
          onChange={onUpload}
          type={'file'}
          {...props}
        />

        {children}
      </form>
    )
  }
)
