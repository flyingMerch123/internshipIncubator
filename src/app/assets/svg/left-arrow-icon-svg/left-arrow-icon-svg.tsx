import * as React from 'react'
import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={10} fill="none" ref={ref} {...props}>
    <path fill="#fff" d="M5 10 0 5l5-5 1.06 1.06L2.13 5l3.93 3.94L5 10Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const LeftArrowIcon = memo(ForwardRef)
