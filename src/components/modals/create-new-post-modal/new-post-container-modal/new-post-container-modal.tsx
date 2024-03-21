import React, { ReactNode } from 'react'

import { CloseIcon } from '@/app'
import { ArrowBackIcon } from '@/app/assets/svg/arrow-back-icon'
import { Button, Typography } from '@/ui'
import * as Dialog from '@radix-ui/react-dialog'
import { FocusOutsideEvent, PointerDownOutsideEvent } from '@radix-ui/react-dismissable-layer'
import { clsx } from 'clsx'

import s from './new-post-container-modal.module.scss'

type ModalProps = {
  children: ReactNode
  onChange?: (open: boolean) => void

  open?: boolean
}
type ModalContentProps = {
  addNewPost: () => void
  children: ReactNode
  className?: string
  currentStep: number
  onInteractOutside?: (event: FocusOutsideEvent | PointerDownOutsideEvent) => void
  stepBackward: () => void
  stepForward: () => void
  title?: string
}

export const NewPostContainerModal = ({ children, onChange, open }: ModalProps) => {
  return (
    <Dialog.Root onOpenChange={onChange} open={open}>
      {children}
    </Dialog.Root>
  )
}

const ModalContent = ({
  addNewPost,
  children,
  className,
  currentStep,
  stepBackward,
  stepForward,
  title,
  ...props
}: ModalContentProps) => {
  const styles = clsx(s.main, className)

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={s.overlay}>
        <Dialog.Content className={s.content} {...props}>
          <div className={s.header}>
            {currentStep > 1 && (
              <button onClick={stepBackward} tabIndex={0}>
                <ArrowBackIcon />
              </button>
            )}

            <Typography as={'h1'} className={s.title} variant={'h1'}>
              {title}
            </Typography>

            {currentStep === 1 && (
              <Dialog.Close aria-label={'Close'} tabIndex={0}>
                <CloseIcon />
              </Dialog.Close>
            )}

            {(currentStep === 2 || currentStep === 3) && (
              <Button onClick={stepForward} tabIndex={0} variant={'link'}>
                Next
              </Button>
            )}

            {currentStep === 4 && (
              <Dialog.Close onClick={addNewPost} tabIndex={0}>
                <Typography as={'h3'} className={s.publish} variant={'h3'}>
                  Publish
                </Typography>
              </Dialog.Close>
            )}
          </div>

          <div className={s.separator}></div>

          <div className={styles}>{children}</div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  )
}

NewPostContainerModal.Root = Dialog.Root
NewPostContainerModal.Button = Dialog.Trigger
NewPostContainerModal.Close = Dialog.Close
NewPostContainerModal.Content = ModalContent
