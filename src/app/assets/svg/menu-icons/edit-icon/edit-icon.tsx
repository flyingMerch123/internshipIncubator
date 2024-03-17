import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color = 'currentColor', height = 24, width = 24, ...restProps } = props

  return (
    <svg
      fill={'none'}
      height={height}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...restProps}
    >
      <g clipPath={'url(#clip0_309_6041)'}>
        <path
          d={
            'M19 20H5C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21C20 20.7348 19.8946 20.4804 19.7071 20.2929C19.5196 20.1054 19.2652 20 19 20Z'
          }
          fill={color}
        />
        <path
          d={
            'M5.0003 18H5.0903L9.2603 17.62C9.71709 17.5745 10.1443 17.3732 10.4703 17.05L19.4703 8.05C19.8196 7.68096 20.0084 7.1885 19.9953 6.68053C19.9822 6.17256 19.7682 5.6905 19.4003 5.34L16.6603 2.6C16.3027 2.26409 15.8341 2.07135 15.3436 2.05845C14.8532 2.04554 14.3751 2.21336 14.0003 2.53L5.0003 11.53C4.67706 11.856 4.4758 12.2832 4.4303 12.74L4.0003 16.91C3.98683 17.0565 4.00583 17.2041 4.05596 17.3424C4.10608 17.4807 4.1861 17.6062 4.2903 17.71C4.38374 17.8027 4.49455 17.876 4.61639 17.9258C4.73823 17.9755 4.86869 18.0008 5.0003 18ZM15.2703 4L18.0003 6.73L16.0003 8.68L13.3203 6L15.2703 4ZM6.3703 12.91L12.0003 7.32L14.7003 10.02L9.1003 15.62L6.1003 15.9L6.3703 12.91Z'
          }
          fill={color}
        />
      </g>
      <defs>
        <clipPath id={'clip0_309_6041'}>
          <rect fill={color} height={height} width={width} />
        </clipPath>
      </defs>
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
