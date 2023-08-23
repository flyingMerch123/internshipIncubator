import '../styles/index.scss' // сделал относительные импорты потому что линтер ругался => поправить позже

import type { AppProps } from 'next/app'

import { WithHomePageLayout } from '../layouts/temp-layout/index' // сделал относительные импорты потому что линтер ругалсяч => поправить позже

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithHomePageLayout>
      <Component {...pageProps} />
    </WithHomePageLayout>
  )
}
