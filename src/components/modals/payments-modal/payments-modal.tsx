import { useDisclose, useTranslation } from '@/app'
import { Button, Modal, Typography } from '@/ui'

import s from './payments-modal.module.scss'

type ModalProps = {
  isOpen: boolean
  isSuccess?: string | string[] | true | undefined
  onClose: () => void
}

export const PaymentsModal = ({ isOpen, isSuccess, onClose }: ModalProps) => {
  const { t } = useTranslation()
  const { back, error, failed, success, successful } = t.paymentsModal

  const title = isSuccess ? success : error

  const content = isSuccess ? (
    <Typography variant={'regular-16'}>{successful}</Typography>
  ) : (
    <Typography variant={'regular-16'}>{failed}</Typography>
  )
  const titleForButton = isSuccess ? 'OK' : back

  return (
    <Modal onChange={onClose} open={isOpen}>
      <Modal.Button asChild />
      <Modal.Content
        className={s.content}
        onInteractOutside={e => e.preventDefault()}
        title={title}
      >
        <Typography variant={'regular-16'}>{content}</Typography>

        <Button className={s.button} fullWidth onClick={onClose}>
          <Typography variant={'h3'}> {titleForButton}</Typography>
        </Button>
      </Modal.Content>
    </Modal>
  )
}
