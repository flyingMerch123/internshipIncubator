import { CloseButtonProps } from 'react-toastify'

import { CloseIcon } from '@/app/assets/svg'

import s from './close-button.module.scss'

export const LoseButton = ({ closeToast }: CloseButtonProps) => (
  <button className={s.closeButton} onClick={closeToast} type={'button'}>
    <CloseIcon />
  </button>
)
