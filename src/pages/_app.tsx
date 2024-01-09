import '@/app/styles/index.scss'
import type { ReactElement, ReactNode } from 'react'

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { Toaster } from '@/components'
import { WithHomePageLayout } from '@/templates'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <Provider store={store}>
      <WithHomePageLayout>{getLayout(<Component {...pageProps} />)}</WithHomePageLayout>
      <Toaster />
    </Provider>
  )
}
