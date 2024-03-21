import React, { useEffect, useState } from 'react'

import { authNavigationUrls } from '@/app/constants'
import { useGetGoogleMutation } from '@/app/services/google/google.api'
import { useRouter } from 'next/router'

const GooglePage = () => {
  const [isFirst, setIsFirst] = useState(true)
  const router = useRouter()
  const { accessToken } = router.query
  const [getGoogleAuthData, { data }] = useGetGoogleMutation()

  useEffect(() => {
    if (accessToken && isFirst) {
      getGoogleAuthData({ access_token: accessToken as string })
      setIsFirst(false)
    }
    if (data) {
      void router.push(`${authNavigationUrls.home()}/user-profile`)
    }
  }, [accessToken, data, getGoogleAuthData, isFirst])

  return <div>Google</div>
}

export default GooglePage
