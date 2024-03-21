import { useCallback, useMemo } from 'react'
import { toast } from 'react-toastify'

import { useDisclose } from '@/app'
import { menuNavigation } from '@/app/constants'
import { FRONT_BASE_URL } from '@/app/constants/common'
import { COMMON_MODE_STATE } from '@/app/constants/enums'
import { copyToClipboard } from '@/app/helpers/copyToClipboard'
import { usePostCardModal } from '@/app/services/modals/modals.hooks'
import {
  useDeleteImagePostMutation,
  useDeletePostByIdMutation,
} from '@/app/services/posts/posts.api'
import {
  ActionTypes,
  ConfirmationModal,
  DropDownMenuType,
  DropdownMenuItemType,
  MENU_VERSION,
} from '@/components'
import { DropdownMenu, MenuItem } from '@/ui'

export const CardDropdownMenu = ({ account, id, ownerId }: DropDownMenuType) => {
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()
  const { isOpen: isControlled, onToggle: closeDropdownMenu } = useDisclose(true)
  const [deleteSelectedPost] = useDeletePostByIdMutation()
  const [deletePostImages] = useDeleteImagePostMutation()
  const currentMenuVersion: Array<DropdownMenuItemType> = MENU_VERSION[account]
  const { changePostCardModalMode, clearPostCardModal, closePostCardModal, selectedPost } =
    usePostCardModal()

  const editPost = useCallback(
    () => changePostCardModalMode(COMMON_MODE_STATE.EDIT),
    [changePostCardModalMode]
  )
  const deletePost = () => {
    const postImagesUploadIds = selectedPost.images.map(image => image.uploadId)

    deleteSelectedPost({ postId: selectedPost.id })
      .unwrap()
      .then(() => {
        postImagesUploadIds.forEach(uploadId => {
          deletePostImages({ uploadId })
        })
        closePostCardModal()
        clearPostCardModal()
        toast.success('posts deleted')
      })
      .catch(err => {
        closeDropdownMenu()
        toast.error(err)
      })
  }

  const copyLinkHandler = useCallback(
    () => copyToClipboard(`${FRONT_BASE_URL}${menuNavigation.profile(ownerId)}/${id}`),
    [id, ownerId]
  )

  const handlersVariants: { [Action in keyof typeof ActionTypes]: () => void } = useMemo(() => {
    return {
      copy: copyLinkHandler,
      delete: openModal,
      edit: editPost,
      follow: () => {},
      report: () => {},
      unfollow: () => {},
    }
  }, [copyLinkHandler, editPost, openModal])

  return (
    <>
      <DropdownMenu>
        {currentMenuVersion?.map(item => (
          <MenuItem
            as={'button'}
            key={`${account}-${item.label}`}
            {...item}
            onClick={handlersVariants[item.action]}
          />
        ))}
      </DropdownMenu>

      <ConfirmationModal
        isOpen={isModalOpened}
        onClose={closeModal}
        onConfirmation={deletePost}
        translation={'deletePost'}
      />
    </>
  )
}
