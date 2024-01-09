import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabsContainerProps = {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  dir?: 'ltr' | 'rtl'
  activationMode?: 'automatic' | 'manual'
  className?: string
}
export const TabsContainer = ({
  defaultValue,
  className,
  children,
  ...props
}: PropsWithChildren<TabsContainerProps>) => {
  return (
    <Tabs.Root defaultValue={defaultValue} className={className} {...props}>
      {children}
    </Tabs.Root>
  )
}
