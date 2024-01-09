import { NextIcon, PreviousIcon } from '@/app'
import { Button } from '@/ui'

type ButtonProps = {
  direction: 'left' | 'right'
  className?: string
  onClick: () => void
  disabled?: boolean
  variant?: 'link' | 'primary' | 'secondary' | 'outlined' | undefined
}
export const CalendarNavigationButton = ({
  direction,
  className,
  onClick,
  disabled,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={className}
      type={'button'}
      {...rest}
    >
      {direction === 'left' ? <PreviousIcon /> : <NextIcon />}
    </Button>
  )
}
