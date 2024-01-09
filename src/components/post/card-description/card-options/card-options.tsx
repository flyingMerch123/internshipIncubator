import { useState } from 'react'

import { clsx } from 'clsx'

import s from './card-options.module.scss'

import { FavouritesMenuIcon, LikedIcon, MessageIcon, ShareLinkIcon, UnlikedIcon } from '@/app'
import { AccountType } from '@/components'

export const CardOptions = ({ account = 'personal' }: { account?: AccountType }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  const styles = {
    container: clsx(s.container, account !== 'personal' && s.containerV2),
    icons: clsx(s.icons, account !== 'personal' && s.iconsV2),
  }

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <button onClick={() => setIsLiked(like => !like)} className={s.like}>
          {isLiked ? <LikedIcon width={24} height={24} /> : <UnlikedIcon width={24} height={24} />}

          <div className={clsx(s.animation, isLiked && s.liked)} />
        </button>

        <button onClick={() => {}}>
          <MessageIcon />
        </button>
        <button onClick={() => {}}>
          <ShareLinkIcon />
        </button>
      </div>

      <div className={s.favourites}>
        <button onClick={() => setIsFavourite(favourite => !favourite)}>
          {isFavourite ? <FavouritesMenuIcon color={'#ffd073'} /> : <FavouritesMenuIcon />}

          <div className={clsx(s.animation, isFavourite && s.favourite)} />
        </button>
      </div>
    </div>
  )
}
