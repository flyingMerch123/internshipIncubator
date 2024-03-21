import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color = 'currentColor', height = 36, width = 36 } = props

  return (
    <svg
      fill={'none'}
      height={height}
      ref={ref}
      viewBox={'0 0 36 36'}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <g clipPath={'url(#clip0_26444_7704)'}>
        <path
          d={
            'M18 35C27.3888 35 35 27.3888 35 18C35 8.61116 27.3888 1 18 1C8.61116 1 1 8.61116 1 18C1 27.3888 8.61116 35 18 35Z'
          }
          stroke={'white'}
          strokeWidth={'2'}
        />
        <path
          d={
            'M9.63756 7.13086L6.45605 10.3124L15.7561 19.6131V30.6696H20.2561V19.6011L29.5448 10.3124L26.3633 7.13086L18.0001 15.4941L9.63756 7.13086Z'
          }
          fill={color}
        />
      </g>
      <defs>
        <clipPath id={'clip0_26444_7704'}>
          <rect fill={color} height={height} width={width} />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
