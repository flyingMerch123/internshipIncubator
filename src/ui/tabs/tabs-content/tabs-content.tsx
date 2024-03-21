import { PropsWithChildren } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

type TabsContentProps = {
  asChild?: boolean
  className?: string
  value: string
}
export const TabsContent = ({ children, ...props }: PropsWithChildren<TabsContentProps>) => {
  return <Tabs.Content {...props}>{children}</Tabs.Content>
}
