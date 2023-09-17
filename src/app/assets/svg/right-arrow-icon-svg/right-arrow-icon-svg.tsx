import * as React from 'react'
import { forwardRef, memo, Ref, SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={10} fill="none" ref={ref} {...props}>
    <path fill="#fff" d="M2 10 .94 8.94 4.87 5 .94 1.06 2 0l5 5-5 5Z" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const RightArrowIcon = memo(ForwardRef)
