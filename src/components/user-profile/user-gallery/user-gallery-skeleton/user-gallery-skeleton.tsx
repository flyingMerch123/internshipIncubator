import { useMatchMedia } from '@/app'
import { SkeletonCard } from '@/ui'
import { clsx } from 'clsx'

import s from '../user-gallery.module.scss'

export const UserGallerySkeleton = () => {
  const { isMobile } = useMatchMedia()

  const styles = {
    card: clsx(s.card, isMobile && s.mobile),
    root: clsx(s.container, isMobile && s.mobile),
  }

  return (
    <div className={styles.root}>
      <SkeletonCard count={12}>
        <div className={styles.card}></div>
      </SkeletonCard>
    </div>
  )
}
