import { toast } from 'react-toastify'

import { useDisclose } from '@/app'
import { setEditMode } from '@/app/services/post/post.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import {
  AccountType,
  ActionTypes,
  ConfirmationModal,
  DropdownMenuItemType,
  MENU_VERSION,
} from '@/components'
import { DropdownMenu, MenuItem } from '@/ui'

export const CardDropdownMenu = ({ account = 'friend' }: { account: AccountType }) => {
  const { isOpen: isModalOpened, onOpen: openModal, onClose: closeModal } = useDisclose()
  const { isOpen: isControlled, onToggle: closeDropdownMenu } = useDisclose(true)

  const currentMenuVersion: Array<DropdownMenuItemType> = MENU_VERSION[account]

  const dispatch = useAppDispatch()
  const editPost = () => dispatch(setEditMode())
  const deletePost = () => {
    /*
        Todo DELETE request to delete post
     */

    toast.success('post was successfully deleted!!!')
    closeDropdownMenu()
  }

  const handlersVariants: { [key in keyof typeof ActionTypes]: () => void } = {
    edit: editPost,
    delete: openModal,
    report: () => {},
    follow: () => {},
    unfollow: () => {},
    copy: () => {},
  }

  return (
    <>
      <DropdownMenu isControlled={isControlled}>
        {currentMenuVersion?.map(item => (
          <MenuItem
            key={`${account}-${item.label}`}
            as={'button'}
            {...item}
            onClick={handlersVariants[item.action]}
          />
        ))}
      </DropdownMenu>

      <ConfirmationModal
        translation={'deletePost'}
        isOpen={isModalOpened}
        onClose={closeModal}
        onConfirmation={deletePost}
      />
    </>
  )
}
