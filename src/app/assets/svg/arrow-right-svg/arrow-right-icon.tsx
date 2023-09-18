import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M9.22 12.67a.67.67 0 0 1-.52-.25l-3.22-4a.67.67 0 0 1 0-.85l3.33-4a.67.67 0 0 1 1.03.86L6.86 8l2.88 3.57a.67.67 0 0 1-.52 1.1Z"
    />
  </svg>
)

export const ArrowRightIcon = memo(SvgComponent)
