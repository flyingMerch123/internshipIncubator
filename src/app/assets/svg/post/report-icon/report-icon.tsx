import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const { color = 'currentColor', height = 24, width = 24, ...restProps } = props

  return (
    <svg
      height={height}
      ref={ref}
      viewBox={'0 0 512 512'}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
      {...restProps}
    >
      <path
        d={
          'M290 360.2c-9.1 9.6-21.7 15.1-34.9 15.1h-.6c-13.5-.2-26-6-35-16L42 187.7v265c0 11.6 6 18.3 9.5 18.3h411c3.5 0 9.5-6.6 9.5-18.3V193.6L290 360.2z'
        }
        fill={'none'}
      />
      <path
        d={
          'm248.4 331.7.6.7c2.1 2.5 4.8 2.9 6.1 2.9 1.4 0 4-.3 6.2-2.7l.6-.7.7-.6L446 163.6l-189.2.3-183.7-1.2 175.3 169z'
        }
        fill={'none'}
      />
      <path
        d={
          'm462.2 123.5-205.3.5-205.3-1h-.1C23.9 123 2 148.9 2 181.3v271.4C2 485.1 23.9 511 51.5 511h411c27.6 0 49.5-25.9 49.5-58.3V181.3c0-32.4-21.7-57.8-49.8-57.8zm-16.1 40L262.7 331.2l-.7.6-.6.7c-2.2 2.4-4.8 2.7-6.2 2.7-1.4 0-4-.4-6.1-2.9l-.6-.7L73.2 162.7l183.7 1.2 189.2-.4zM462.5 471h-411c-3.5 0-9.5-6.6-9.5-18.3v-265l177.6 171.6c9 10 21.7 15.8 35.2 16h.6c13.3 0 25.7-5.5 34.8-15.1l182-166.6v259.1c-.2 11.7-6.2 18.3-9.7 18.3z'
        }
        fill={color}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
