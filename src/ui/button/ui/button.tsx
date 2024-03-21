import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ButtonProps } from '@/ui/button/model/button-types'
import { clsx } from 'clsx'

import cls from '../styles/button.module.scss'

export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    type = 'button',
    variant = 'primary',
    ...rest
  } = props
  const classNames = clsx(cls[variant], fullWidth && cls.fullWidth, className)

  return <Component className={classNames} type={type} {...rest} />
}
