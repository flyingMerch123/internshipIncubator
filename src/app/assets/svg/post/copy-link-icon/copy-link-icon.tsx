import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { height = 24, width = 24, color = 'currentColor', ...restProps } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} ref={ref} {...restProps}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <rect width="13" height="13" x="7" y="7" rx="2" />
        <path d="M3 13H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </g>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
