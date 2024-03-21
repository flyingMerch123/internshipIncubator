import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 24 24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M4.71 3.29a1 1 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1 1 0 1 0 1.42-1.42l-16-16ZM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56-.06.01Z'
      }
      fill={'currentColor'}
    />
    <path
      d={
        'M12.22 17c-4.3.1-7.12-3.59-8-5 .63-1 1.38-1.91 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c1.1-.03 2.2-.26 3.23-.67l-1.58-1.58c-.56.15-1.13.23-1.7.25ZM21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5-1.1.03-2.2.26-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.7 13.7 0 0 1-2.29 2.72L19 16.13a15.9 15.9 0 0 0 2.91-3.63 1 1 0 0 0-.04-1Z'
      }
      fill={'currentColor'}
    />
  </svg>
)

export default memo(forwardRef(SvgComponent))
