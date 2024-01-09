import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import { clsx } from 'clsx'

import s from './text-area.module.scss'

import { Typography } from '@/ui'

type TextAreaType = {
  label?: string
  error?: string
  disabled?: boolean
  sizeLimit?: number
  initialSize?: number
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaType>(
  (
    { label, sizeLimit, initialSize = 0, onChange, error, disabled, spellCheck = false, ...props },
    ref
  ) => {
    const [size, setSize] = useState<number>(initialSize)

    const updateTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setSize(e.target.value?.length)

      onChange && onChange(e)
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
          <Typography as={'label'} variant={'regular-14'} htmlFor={id} className={styles.label}>
            {label}
          </Typography>
        )}
        <textarea
          id={id}
          className={styles.textarea}
          disabled={disabled}
          spellCheck={spellCheck}
          onChange={updateTextArea}
          maxLength={sizeLimit}
          ref={ref}
          {...props}
        />

        {sizeLimit && (
          <Typography as={'p'} variant={'regular-14'} className={styles.limit}>
            {size}/{sizeLimit}
          </Typography>
        )}

        {error && (
          <Typography as={'p'} variant={'regular-14'} className={s.error}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
