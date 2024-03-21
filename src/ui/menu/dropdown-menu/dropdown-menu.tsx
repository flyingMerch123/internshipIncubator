import { PropsWithChildren } from 'react'

import { DropdownMenuContainer, MenuProps } from '@/ui'

export const DropdownMenu = ({ children, ...restProps }: PropsWithChildren<MenuProps>) => {
  return <DropdownMenuContainer {...restProps}>{children}</DropdownMenuContainer>
}
