import {
  CreateMenuIcon,
  FavouritesMenuIcon,
  HomeMenuIcon,
  LogOutMenuIcon,
  MessageMenuIcon,
  ProfileMenuIcon,
  SearchMenuIcon,
  StatisticsMenuIcon,
  useDisclose,
  useTranslation,
} from '@/app'
import { authNavigationUrls, menuNavigation } from '@/app/constants'
import { useGetMeQuery, useSignOutMutation } from '@/app/services/auth/auth.api'
import { useCreatePostModal } from '@/app/services/modals/modals.hooks'
import { ConfirmationModal } from '@/components'
import CreateNewPostModal from '@/components/modals/create-new-post-modal/create-new-post-modal'
import { MenuItem, SidebarMenu } from '@/ui'
import { useRouter } from 'next/router'

import s from './sidebar-menu-with-items.module.scss'

export const SidebarMenuWithItems = () => {
  const { isOpen, onClose, onOpen } = useDisclose()
  const { openCreatePostModal } = useCreatePostModal()
  const { pathname, push } = useRouter()
  const [signOut] = useSignOutMutation()
  const { data, isLoading } = useGetMeQuery()
  const { t } = useTranslation()
  const labels = t.sidebarMenu

  const onSignOut = () => {
    signOut()

    void push(authNavigationUrls.main())
  }

  return (
    <>
      <SidebarMenu className={s.sidebar}>
        <MenuItem
          href={menuNavigation.home()}
          icon={HomeMenuIcon}
          isSelected={pathname.endsWith(menuNavigation.home())}
          label={labels.home}
        />
        <MenuItem
          as={'button'}
          icon={CreateMenuIcon}
          label={labels.create}
          onClick={openCreatePostModal}
        />

        <MenuItem
          href={menuNavigation.profile(data?.userId)}
          icon={ProfileMenuIcon}
          isSelected={pathname.startsWith(menuNavigation.profile(data?.userId))}
          label={labels.profile}
        />

        <MenuItem
          href={menuNavigation.messenger()}
          icon={MessageMenuIcon}
          isSelected={pathname.startsWith(menuNavigation.messenger())}
          label={labels.messenger}
        />
        <MenuItem
          href={menuNavigation.search()}
          icon={SearchMenuIcon}
          isSelected={pathname.startsWith(menuNavigation.search())}
          label={labels.search}
        />
        <MenuItem disabled href={'#'} icon={StatisticsMenuIcon} label={labels.statistics} />
        <MenuItem disabled href={'#'} icon={FavouritesMenuIcon} label={labels.favorites} />

        <MenuItem as={'button'} icon={LogOutMenuIcon} label={labels.logout} onClick={onOpen} />
      </SidebarMenu>
      <CreateNewPostModal />
      <ConfirmationModal isOpen={isOpen} onClose={onClose} onConfirmation={onSignOut} />
    </>
  )
}
