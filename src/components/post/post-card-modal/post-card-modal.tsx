import { PropsWithChildren } from 'react'

import { CloseIcon, useDisclose, useRtkStateHook } from '@/app'
import { resetDescriptionState, setViewMode } from '@/app/services/posts/posts.slice'
import { ConfirmationModal, LoadingSpinner, PostCardModalType } from '@/components'
import { Modal } from '@/ui'
import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'
import { clsx } from 'clsx'

import s from './post-card-modal.module.scss'

export const PostCardModal = ({
  askConfirmation = false,
  children,
  isModified = false,
  isOpen = false,
  message,
  onChange: closeCardModal,
  title,
}: PropsWithChildren<PostCardModalType>) => {
  const {
    isOpen: shouldConfirmAction,
    onClose: closeConfirmationModal,
    onOpen: openConfirmationModal,
  } = useDisclose(askConfirmation)

  const { _dispatch, _state } = useRtkStateHook()
  const { isEdited, mode } = _state.post
  const reset = () => _dispatch(resetDescriptionState())
  const handleConfirmation = () => {
    _dispatch(setViewMode())
    reset()

    closeConfirmationModal()
    closeCardModal()
  }

  const closeMainModal = () => {
    if (!isEdited) {
      _dispatch(setViewMode())

      return closeCardModal()
    }

    if (mode === 'edit') {
      return openConfirmationModal()
    }

    closeCardModal()
  }

  const handleCloseClick = shouldConfirmAction ? openConfirmationModal : closeMainModal

  const handleOutsideClick = (e: FocusOutsideEvent | PointerDownOutsideEvent) => {
    e.preventDefault()

    if (isEdited) {
      return openConfirmationModal()
    }

    if (mode === 'edit') {
      _dispatch(setViewMode())

      return closeCardModal()
    }

    // closeCardModal()
  }

  return (
    <>
      <Modal open={isOpen}>
        <Modal.Content
          className={clsx(s.container, !isModified && s.containerV2)}
          isModified={isModified}
          onClose={handleCloseClick}
          onInteractOutside={handleOutsideClick}
          title={isModified ? '' : 'Edit Post'}
        >
          {children}

          {isModified && <CloseIcon className={s.close} onClick={handleCloseClick} />}
        </Modal.Content>
      </Modal>

      <ConfirmationModal
        isOpen={shouldConfirmAction}
        message={message}
        onClose={closeConfirmationModal}
        onConfirmation={handleConfirmation}
        title={title}
        translation={'closePost'}
      />
    </>
  )
}
