import { useTranslation } from '@/app'
import { Button, Modal, Typography } from '@/ui'
import { clsx } from 'clsx'

import s from './confirmation-modal.module.scss'

type ModalProps = {
  btnsStyle?: string
  confirmBtnLabel?: string
  declineBtnLabel?: string
  isOpen: boolean
  message?: string
  onClose: () => void
  onConfirmation: () => void
  title?: string
  translation?: string
}
export const ConfirmationModal = ({
  btnsStyle,
  confirmBtnLabel,
  declineBtnLabel,
  isOpen,
  message,
  onClose,
  onConfirmation,
  title,
  translation = 'logOut',
}: ModalProps) => {
  const onConfirm = () => {
    onConfirmation()
    onClose()
  }

  const { t } = useTranslation()

  type KeyTypesInTextModel = keyof typeof t.confirmationModal
  const typedTranslation = translation as KeyTypesInTextModel

  const {
    message: translatedMessage,
    no,
    title: translatedTitle,
    yes,
  } = t.confirmationModal[typedTranslation]

  return (
    <Modal onChange={onClose} open={isOpen}>
      <Modal.Button asChild />
      <Modal.Content
        className={clsx(s.content, isOpen && s.visible)}
        onInteractOutside={e => e.preventDefault()}
        title={title || translatedTitle}
      >
        <Typography variant={'regular-16'}>{message || translatedMessage}</Typography>

        <div className={clsx(s.btns, btnsStyle)}>
          <Button onClick={onConfirm} variant={'outlined'}>
            {confirmBtnLabel || yes}
          </Button>
          <Button onClick={onClose}>{declineBtnLabel || no} </Button>
        </div>
      </Modal.Content>
    </Modal>
  )
}
