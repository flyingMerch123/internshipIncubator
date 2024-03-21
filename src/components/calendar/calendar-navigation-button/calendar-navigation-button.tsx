import { NextIcon, PreviousIcon } from '@/app'
import { Button } from '@/ui'

type ButtonProps = {
  className?: string
  direction: 'left' | 'right'
  disabled?: boolean
  onClick: () => void
  variant?: 'link' | 'outlined' | 'primary' | 'secondary' | undefined
}
export const CalendarNavigationButton = ({
  className,
  direction,
  disabled,
  onClick,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={'button'}
      variant={variant}
      {...rest}
    >
      {direction === 'left' ? <PreviousIcon /> : <NextIcon />}
    </Button>
  )
}
