import { Ref, SVGProps, forwardRef, memo } from 'react'

type SvgComponentType = {
  bgColor?: string
  rounded?: boolean
} & SVGProps<SVGSVGElement>
const SvgComponent = (props: SvgComponentType, ref: Ref<SVGSVGElement>) => {
  const {
    bgColor,
    color = 'currentColor',
    fill = 'none',
    height = 24,
    rounded = false,
    width = 24,
    ...restProps
  } = props

  return (
    <svg
      fill={fill}
      height={height}
      ref={ref}
      style={{ backgroundColor: bgColor, borderRadius: rounded ? '50%' : '0%' }}
      viewBox={'0 0 24 24'}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...restProps}
    >
      <path
        d={
          'M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
        }
        fill={color}
      />
    </svg>
  )
}

const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
