import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabsContainerProps = {
  activationMode?: 'automatic' | 'manual'
  className?: string
  defaultValue: string
  dir?: 'ltr' | 'rtl'
  onValueChange?: (value: string) => void
  value?: string
}
export const TabsContainer = ({
  children,
  className,
  defaultValue,
  ...props
}: PropsWithChildren<TabsContainerProps>) => {
  return (
    <Tabs.Root className={className} defaultValue={defaultValue} {...props}>
      {children}
    </Tabs.Root>
  )
}
