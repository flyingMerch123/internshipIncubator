import { useEffect, useState } from 'react'

import { UserProfile, UserProfileSkeleton } from '@/modules/user-profile'

const UserProfilePage = () => {
  // Simulation of fetch request

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500)
  }, [])

  return isLoaded ? <UserProfile /> : <UserProfileSkeleton />
}

export default UserProfilePage
