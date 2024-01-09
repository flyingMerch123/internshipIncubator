import { SVGProps, Ref, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { height = 24, width = 24, color = 'currentColor', ...restProps } = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
      <path fill="#000" d="M14 14h-4v7h4v-7Z" />
      <path
        fill="#000"
        d="M20.42 10.18 12.71 2.3a1.001 1.001 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44Z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
