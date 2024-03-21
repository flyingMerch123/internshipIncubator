import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color = 'currentColor', height = 24, width = 24, ...restProps } = props

  return (
    <svg
      height={height}
      ref={ref}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...restProps}
    >
      <g
        fill={'none'}
        fillRule={'evenodd'}
        stroke={color}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
        transform={'translate(1 1)'}
      >
        <rect height={'13'} rx={'2'} width={'13'} x={'7'} y={'7'} />
        <path d={'M3 13H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'} />
      </g>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
