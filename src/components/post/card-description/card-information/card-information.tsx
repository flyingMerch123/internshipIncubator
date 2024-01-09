import { clsx } from 'clsx'

import s from './card-information.module.scss'

import { Avatar } from '@/components'
import { Typography } from '@/ui'

export const CardInformation = ({
  createdAt,
  likes = 152,
  cardType = 'xl',
}: {
  createdAt?: string
  likes?: number
  cardType?: 'regular' | 'xl'
}) => {
  return (
    <div className={clsx(s.container, cardType === 'regular' && s.containerV2)}>
      <div className={s.likes}>
        <div className={s.avatars}>
          <Avatar
            src={'/assets/avatar/resized/1.jpg'}
            width={24}
            height={24}
            className={s.avatarFirst}
          />
          <Avatar
            src={'/assets/avatar/resized/2.jpg'}
            width={24}
            height={24}
            className={s.avatarSecond}
          />
          <Avatar
            src={'/assets/avatar/resized/4.jpg'}
            width={24}
            height={24}
            className={s.avatarThird}
          />
        </div>

        <Typography as={'p'} variant={'regular-14'}>
          {likes}
          <Typography variant={'bold-14'}>{' "Like"'}</Typography>
        </Typography>
      </div>

      <Typography variant={'small'} className={s.created}>
        {createdAt}
      </Typography>
    </div>
  )
}
