import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs-item.module.scss'

type TabsItemProps = {
  value: string
  asChild?: boolean
  disabled?: boolean
}
export const TabsItem = ({ children, ...props }: PropsWithChildren<TabsItemProps>) => {
  return (
    <Tabs.Trigger className={s.item} {...props}>
      {children}
    </Tabs.Trigger>
  )
}
