import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './file-input.module.scss'

type FileInputProps = {
  accept?: string | string[]
  label?: string
  onUpload?: () => void
  className?: string
}

type CustomFileInputType = FileInputProps &
  Omit<ComponentPropsWithoutRef<'input'>, keyof FileInputProps>

export const FileInput = forwardRef<HTMLFormElement, CustomFileInputType>(
  (
    {
      accept,
      id = 'file-input',
      label = 'Select from Computer',
      name = 'file',
      onUpload,
      disabled,
      className,
      children,
      ...props
    }: CustomFileInputType,
    ref
  ) => {
    const fileFormat = Array.isArray(accept) ? accept.join(', ') : accept

    const styles = {
      label: clsx(s.label, disabled && s.disabled),
      form: className,
    }

    return (
      <form ref={ref} className={styles.form}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>

        <input
          className={s.input}
          type="file"
          id={id}
          name={name}
          accept={fileFormat}
          disabled={disabled}
          onChange={onUpload}
          {...props}
        />

        {children}
      </form>
    )
  }
)
