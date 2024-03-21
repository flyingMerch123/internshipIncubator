import React, { FC, PropsWithChildren } from 'react'

import s from './flex-wrapper.module.scss'

export const FlexWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>
}
