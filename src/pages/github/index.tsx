import React from 'react'

import { useRouter } from 'next/router'

const Github = () => {
  const router = useRouter()

  return (
    <>
      <div>{router.query.accessToken}</div>
      <div>{router.query.email}</div>
    </>
  )
}

export default Github
