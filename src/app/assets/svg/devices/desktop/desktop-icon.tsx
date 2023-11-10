import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { height = 36, width = 36, color = 'currentColor' } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M31.5 3H4.5C2.85 3 1.5 4.35 1.5 6V24C1.5 25.65 2.85 27 4.5 27H15L12 31.5V33H24V31.5L21 27H31.5C33.15 27 34.5 25.65 34.5 24V6C34.5 4.35 33.15 3 31.5 3ZM31.5 21H4.5V6H31.5V21Z"
        fill={color}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
