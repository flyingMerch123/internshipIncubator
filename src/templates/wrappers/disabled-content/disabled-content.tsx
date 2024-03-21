import React, { PropsWithChildren } from 'react'

import { clsx } from 'clsx'

import s from './disabled-content.module.scss'

type Props = PropsWithChildren<{ disabled?: boolean; id?: string }>
export const DisabledContent = ({ children, disabled = false, id }: Props) => {
  return (
    <div className={clsx(s.container, disabled && s.disabled)} id={id}>
      {children}
    </div>
  )
}
