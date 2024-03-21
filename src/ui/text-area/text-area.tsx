import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import { Typography } from '@/ui'
import { clsx } from 'clsx'

import s from './text-area.module.scss'

type TextAreaType = {
  disabled?: boolean
  error?: string
  initialSize?: number
  label?: string
  setValue?: (value: string) => void
  sizeLimit?: number
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>(
  (
    {
      disabled,
      error,
      initialSize = 0,
      label,
      onChange,
      setValue,
      sizeLimit,
      spellCheck = false,
      ...props
    },
    ref
  ) => {
    const [size, setSize] = useState<number>(initialSize)

    const updateTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setSize(e.target.value?.length)
      onChange && onChange(e)
      if (setValue) {
        setValue(e.target.value)
      }
    }

    const styles = {
      container: clsx(s.container, disabled && s.disabled),
      label: clsx(s.label, disabled && s.disabled),
      limit: clsx(s.limit, disabled && s.disabled),
      textarea: clsx(s.textarea, disabled && s.disabled, error && s.warning),
    }

    const id: string = useId()

    return (
      <div className={s.container}>
        {label && (
          <Typography as={'label'} className={styles.label} htmlFor={id} variant={'regular-14'}>
            {label}
          </Typography>
        )}
        <textarea
          className={styles.textarea}
          disabled={disabled}
          id={id}
          maxLength={sizeLimit}
          onChange={updateTextArea}
          ref={ref}
          spellCheck={spellCheck}
          {...props}
        />

        {sizeLimit && (
          <Typography as={'p'} className={styles.limit} variant={'regular-14'}>
            {size}/{sizeLimit}
          </Typography>
        )}

        {error && (
          <Typography as={'p'} className={s.error} variant={'regular-14'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
