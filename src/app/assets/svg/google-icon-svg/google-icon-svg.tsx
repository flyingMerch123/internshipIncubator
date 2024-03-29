import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 36 36'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M7.9 14.65A10.62 10.62 0 0 1 18 7.36c2.54 0 4.83.9 6.63 2.38l5.23-5.24a17.95 17.95 0 0 0-28 5.48l6.04 4.67Z'
        }
        fill={'#EA4335'}
      />
      <path
        d={
          'M24.06 27.02A11.1 11.1 0 0 1 18 28.64c-4.7 0-8.67-3.02-10.08-7.24L1.86 26C4.79 31.94 10.9 36 18 36c4.4 0 8.6-1.56 11.75-4.5l-5.69-4.48Z'
        }
        fill={'#34A853'}
      />
      <path
        d={
          'M29.75 31.5c3.3-3.07 5.43-7.64 5.43-13.5 0-1.06-.16-2.2-.4-3.27H18v6.95h9.65a8.11 8.11 0 0 1-3.59 5.34l5.7 4.48Z'
        }
        fill={'#4A90E2'}
      />
      <path
        d={
          'M7.92 21.4a10.68 10.68 0 0 1-.02-6.75L1.86 9.98A17.9 17.9 0 0 0 0 18c0 2.88.67 5.6 1.86 8l6.06-4.6Z'
        }
        fill={'#FBBC05'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h36v36H0z'} fill={'#fff'} />
      </clipPath>
    </defs>
  </svg>
)

export default memo(forwardRef(SvgComponent))
