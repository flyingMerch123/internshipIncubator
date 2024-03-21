import { menuNavigation } from '@/app/constants'
import { timeAgo } from '@/app/helpers/customizeDate'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import { PostModel } from '@/app/services/posts/posts.types'
import { AccountType, Avatar, CardDropdownMenu } from '@/components'
import { Typography } from '@/ui'
import { useRouter } from 'next/router'

import s from './card-header.module.scss'

export const CardHeader = ({
  avatarOwner,
  createdAt,
  id,
  isMyProfile,
  ownerId,
  userName,
}: Omit<PostModel, 'images'>) => {
  const accountType: AccountType = isMyProfile ? 'personal' : 'public'
  const { clearPostCardModal, closePostCardModal, selectedPost } = usePostCardModal()
  const { push } = useRouter()
  const openUserProfileHandler = () => {
    push(menuNavigation.profile(ownerId || selectedPost.ownerId)).then(() => {
      closePostCardModal()
      clearPostCardModal()
    })
  }

  return (
    <header className={s.header}>
      <div className={s.user}>
        <div className={s.userInfo} onClick={openUserProfileHandler}>
          <Avatar height={36} iconScale={0.6} src={avatarOwner} width={36} />
          <Typography
            as={'a'}
            href={menuNavigation.profile(ownerId || selectedPost.ownerId)}
            variant={'h3'}
          >
            {userName}
          </Typography>
        </div>
        {createdAt && (
          <>
            <div className={s.circle}></div>
            <Typography className={s.date} variant={'small'}>
              {timeAgo(createdAt)}
            </Typography>
          </>
        )}
      </div>

      <CardDropdownMenu account={accountType} id={id} ownerId={ownerId} />
    </header>
  )
}
