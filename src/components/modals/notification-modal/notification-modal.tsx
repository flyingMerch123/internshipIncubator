import React from 'react'

import { Button, Modal, Typography } from '@/ui'

import s from './notification-modal.module.scss'

type Props = {
  isOpen: boolean
  message?: string
  onClose?: () => void
}
export const NotificationModal = ({ isOpen, message, onClose }: Props) => {
  return (
    <div>
      <Modal onChange={onClose} open={isOpen}>
        <Modal.Button asChild />
        <Modal.Content
          className={s.content}
          onInteractOutside={e => e.preventDefault()}
          title={'Email sent'}
        >
          <Typography variant={'regular-16'}>{message}</Typography>
          <div className={s.confirm}>
            <Button onClick={onClose}>Ok</Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}
