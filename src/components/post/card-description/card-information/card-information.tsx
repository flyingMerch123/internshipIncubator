import { date } from '@/app/helpers/customizeDate'
import { Avatar } from '@/components'
import { Typography } from '@/ui'
import { clsx } from 'clsx'

import s from './card-information.module.scss'

export const CardInformation = ({
  cardType = 'xl',
  createdAt,
  likes = 152,
}: {
  cardType?: 'regular' | 'xl'
  createdAt?: string
  likes?: number
}) => {
  if (!createdAt) {
    return null
  }

  return (
    <div className={clsx(s.container, cardType === 'regular' && s.containerV2)}>
      <div className={s.likes}>
        <div className={s.avatars}>
          <Avatar
            className={s.avatarFirst}
            height={24}
            src={'/assets/avatar/resized/1.jpg'}
            width={24}
          />
          <Avatar
            className={s.avatarSecond}
            height={24}
            src={'/assets/avatar/resized/2.jpg'}
            width={24}
          />
          <Avatar
            className={s.avatarThird}
            height={24}
            src={'/assets/avatar/resized/4.jpg'}
            width={24}
          />
        </div>

        <Typography as={'p'} variant={'regular-14'}>
          {likes}
          <Typography variant={'bold-14'}>{' "Like"'}</Typography>
        </Typography>
      </div>

      <Typography className={s.created} variant={'small'}>
        {date(createdAt)}
      </Typography>
    </div>
  )
}
