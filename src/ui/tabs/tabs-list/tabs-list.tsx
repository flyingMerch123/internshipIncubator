import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs-list.module.scss'

type TabsListProps = {
  loop?: boolean
  className?: string
  fullWidth?: boolean
}
export const TabsList = ({ children, fullWidth, ...props }: PropsWithChildren<TabsListProps>) => {
  const styles = clsx(s.list, fullWidth && s.full)

  return (
    <Tabs.List className={styles} {...props}>
      {children}
    </Tabs.List>
  )
}
