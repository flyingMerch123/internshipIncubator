import { clsx } from 'clsx'

import s from './confirmation-modal.module.scss'

import { LocaleType, useTranslation } from '@/app'
import { Button, Modal, Typography } from '@/ui'

type ModalProps = {
  title?: string
  message?: string
  isOpen: boolean
  onClose: () => void
  confirmBtnLabel?: string
  declineBtnLabel?: string
  translation?: string
  btnsStyle?: string
  onConfirmation: () => void
}
export const ConfirmationModal = ({
  title,
  message,
  isOpen,
  onClose,
  confirmBtnLabel,
  declineBtnLabel,
  translation = 'logOut',
  btnsStyle,
  onConfirmation,
}: ModalProps) => {
  const onConfirm = () => {
    onConfirmation()
    onClose()
  }

  const { t } = useTranslation()

  type KeyTypesInTextModel = keyof typeof t.confirmationModal
  const typedTranslation = translation as KeyTypesInTextModel

  const {
    yes,
    no,
    title: translatedTitle,
    message: translatedMessage,
  } = t.confirmationModal[typedTranslation]

  return (
    <Modal open={isOpen} onChange={onClose}>
      <Modal.Button asChild />
      <Modal.Content
        className={clsx(s.content, isOpen && s.visible)}
        title={title || translatedTitle}
        onInteractOutside={e => e.preventDefault()}
      >
        <Typography variant="regular-16">{message || translatedMessage}</Typography>

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
