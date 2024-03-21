import { PropsWithChildren } from 'react'

import { useGetMeQuery } from '@/app/services/auth/auth.api'
import { SidebarMenuLayout } from '@/templates/layouts'

export const WithHomePageLayout = ({ children }: PropsWithChildren) => {
  const { data: token } = useGetMeQuery()

  const isAuthed = Boolean(token)

  return <SidebarMenuLayout isAuthed={isAuthed}>{children}</SidebarMenuLayout>
}
