import styles from './control-button.module.scss'

import { ArrowLeftIcon } from '@/app/assets/svg/arrow-left-svg'
import { ArrowRightIcon } from '@/app/assets/svg/arrow-right-svg'

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
}

export const PrevButton = ({ onClick, disabled }: NavigationButtonProps) => {
  return (
    <button className={styles.item} onClick={onClick} disabled={disabled}>
      <ArrowRightIcon className={styles.icon} width={16} height={16} />
    </button>
  )
}
