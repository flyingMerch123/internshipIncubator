import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} fill="none" {...props}>
    <path
      fill="#fff"
      d="M6.67 12.67a.67.67 0 0 1-.52-1.1L9.14 8 6.26 4.42a.67.67 0 0 1 .1-.94.67.67 0 0 1 .97.1l3.22 4a.67.67 0 0 1 0 .85l-3.33 4a.67.67 0 0 1-.55.24Z"
    />
  </svg>
)

export const ArrowLeftIcon = memo(SvgComponent)
