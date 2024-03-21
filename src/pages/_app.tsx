import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import React, { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { useLoadingSpinner } from '@/app/services/application/application.hooks'
import { store, wrapper } from '@/app/store/store'
import { LoadingSpinner, Toaster } from '@/components'
import { WithHomePageLayout } from '@/templates'

import '@/app/styles/index.scss'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  const { isLoading, message } = useLoadingSpinner()

  return (
    <Provider store={store}>
      <WithHomePageLayout>{getLayout(<Component {...pageProps} />)}</WithHomePageLayout>
      <Toaster />
      <LoadingSpinner isLoading={isLoading} label={message} />
    </Provider>
  )
}

export default wrapper.withRedux(App)
