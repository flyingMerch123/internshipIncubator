import type { AppProps } from 'next/app'
import '@/app/styles/index.scss'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { Toaster } from '@/components'
import { WithHomePageLayout } from '@/templates'
import { SidebarMenuLayout } from '@/templates/layouts/sidebar-menu-layout/sidebar-menu-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WithHomePageLayout>
        <Component {...pageProps} />
      </WithHomePageLayout>
      <Toaster />
    </Provider>
  )
}
