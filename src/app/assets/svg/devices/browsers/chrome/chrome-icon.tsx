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
        d="M6.00684 4.57666C9.19041 1.73032 13.393 0 18.0002 0C24.9083 0 30.9069 3.89033 33.9244 9.6H18.0002C14.5103 9.6 11.5176 11.7282 10.2489 14.7575L6.00684 4.57666Z"
        fill={color}
      />
      <path
        d="M4.18915 6.45459C1.57405 9.57963 0 13.6058 0 18C0 25.9778 5.1883 32.7425 12.3753 35.1041L19.1214 26.3258C18.7546 26.3748 18.3802 26.4 18 26.4C14.0075 26.4 10.6656 23.6146 9.81142 19.881C9.765 19.8135 9.7248 19.7402 9.69204 19.6615L4.18915 6.45459Z"
        fill={color}
      />
      <path
        d="M14.9155 35.7369C15.9176 35.9097 16.9482 36 17.9998 36C27.942 36 35.9998 27.9422 35.9998 18C35.9998 15.8915 35.6374 13.8679 34.9714 11.9878C34.9154 11.9958 34.8581 12 34.7998 12H23.8785C25.4345 13.5246 26.3998 15.6496 26.3998 18C26.3998 20.2157 25.542 22.231 24.1402 23.732C24.1308 23.7452 24.1212 23.7583 24.1114 23.7712L14.9155 35.7369Z"
        fill={color}
      />
      <path
        d="M12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18Z"
        fill={color}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
