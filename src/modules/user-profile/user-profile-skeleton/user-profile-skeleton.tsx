import { UserGallerySkeleton } from '@/components'
import { UserProfileDescriptionSkeleton } from '@/modules'

export const UserProfileSkeleton = () => {
  return (
    <main>
      <UserProfileDescriptionSkeleton />
      <UserGallerySkeleton />
    </main>
  )
}
