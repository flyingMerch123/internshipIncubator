import React, { ReactNode, useState } from 'react'

import s from './notification-modal.module.scss'

import { Button, Modal, Typography } from '@/ui'

type Props = {
  message?: string
  isOpen: boolean
  onClose?: () => void
}
export const NotificationModal = ({ message, isOpen, onClose }: Props) => {
  return (
    <div>
      <Modal open={isOpen} onChange={onClose}>
        <Modal.Button asChild />
        <Modal.Content
          className={s.content}
          title="Email sent"
          onInteractOutside={e => e.preventDefault()}
        >
          <Typography variant="regular-16">{message}</Typography>
          <div className={s.confirm}>
            <Button onClick={onClose}>Ok</Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}
