import { FC, PropsWithChildren } from 'react'

import Link from 'next/link'

type Props = PropsWithChildren
export const WithHomePageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Link style={{ fontSize: 'var(--font-size-xxl)', padding: '6px' }} href={'/'}>
        Home
      </Link>
      <div>{children}</div>
    </>
  )
}
