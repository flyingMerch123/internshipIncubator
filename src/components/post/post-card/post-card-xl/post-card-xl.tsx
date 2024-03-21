import { ReactElement } from 'react'

import { useDisclose, useRtkStateHook } from '@/app'
import {
  EditModeInterface,
  ImageSlider,
  PostCardModal,
  PostCardXLType,
  ViewModeInterface,
} from '@/components'
import { Button } from '@/ui'

type InterfaceType = { [ViewMode: string]: ReactElement }

export const PostCardXL = (props: PostCardXLType) => {
  const { isOpen: isModalOpened, onClose: closeModal, onOpen: openModal } = useDisclose()

  const {
    _state: { post },
  } = useRtkStateHook()

  // @ts-ignore
  const isEditMode: boolean = post.mode === 'edit'

  const interfaces: InterfaceType = {
    edit: <EditModeInterface postId={0} {...props} />,
    view: <ViewModeInterface {...props} />,
  }

  // @ts-ignore
  const CurrentInterface: ReactElement = interfaces[post.mode]

  return (
    <>
      <Button onClick={openModal}>Show Post Details</Button>

      <PostCardModal
        askConfirmation={isEditMode}
        isModified={!isEditMode}
        isOpen={isModalOpened}
        onChange={closeModal}
      >
        <ImageSlider aspectRatio={'1/1'} fitStyle={'cover'} images={[]} />

        {CurrentInterface}
      </PostCardModal>
    </>
  )
}
