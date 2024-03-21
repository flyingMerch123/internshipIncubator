import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'1rem'}
    viewBox={'0 0 16 16'}
    width={'1rem'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'}>
      <path d={'M10 11 7 8l3-3-1-1-4 4 4 4 1-1Z'} fill={'currentColor'} />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'currentColor'} />
      </clipPath>
    </defs>
  </svg>
)

export default memo(SvgComponent)
