import React, { useState } from 'react'

import { Button, Modal, Typography } from '@/ui'

import s from './send-email-modal.module.scss'

export const SendEmailModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Modal onChange={setIsOpen} open={isOpen}>
        <Modal.Button asChild>
          <Button>Open modal</Button>
        </Modal.Button>
        <Modal.Content className={s.content} title={'Email sent'}>
          <Typography variant={'regular-16'}>
            We have sent a link to confirm your email to epam@epam.com
          </Typography>
          <div className={s.confirm}>
            <Button onClick={() => setIsOpen(false)}>Ok</Button>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  )
}
