import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import { Tags } from '@/ui/typography/enum'
import { TypographyProps } from '@/ui/typography/types'
import { clsx } from 'clsx'

import s from '@/ui/typography/typography.module.scss'

export const Typography = <T extends ElementType>({
  as = 'span',
  className,
  variant = 'regular-14',
  ...rest
}: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  const styles = clsx(s[variant], className)

  const Component = as || Tags[variant]

  return <Component className={styles} {...rest} />
}
