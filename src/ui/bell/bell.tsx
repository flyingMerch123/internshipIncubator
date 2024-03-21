import { BellIcon } from '@/app/assets/svg'
import { clsx } from 'clsx'

import s from './bell.module.scss'

type BellProps = {
  className?: string
  messageNumber?: number
  onClick?: () => void
}

export const Bell = ({ className, messageNumber, onClick }: BellProps): JSX.Element => {
  const classNames = {
    bell: clsx(s.bell, className),
    label: clsx(s.label),
    root: clsx(s.root, className),
  }

  return (
    <div className={classNames.root} onClick={onClick}>
      <BellIcon className={classNames.bell} />
      {messageNumber && <span className={classNames.label}>{messageNumber}</span>}
    </div>
  )
}
