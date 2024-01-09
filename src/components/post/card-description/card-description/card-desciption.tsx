import s from './card-description.module.scss'

import { Avatar, PostType } from '@/components'
import { Typography } from '@/ui'

type CardDescriptionType = {
  description?: string
} & Pick<PostType, 'url' | 'userName' | 'createdAt'>

export const CardDescription = ({ url, userName, description, createdAt }: CardDescriptionType) => {
  return (
    <div className={s.description}>
      <Avatar src={url} width={36} height={36} iconScale={0.6} />

      <div className={s.info}>
        <Typography as={'p'} variant={'regular-14'}>
          <Typography variant={'bold-14'}>{`${userName} `}</Typography>
          {description}
        </Typography>

        <Typography variant={'small'} className={s.created}>
          {createdAt}
        </Typography>
      </div>
    </div>
  )
}
