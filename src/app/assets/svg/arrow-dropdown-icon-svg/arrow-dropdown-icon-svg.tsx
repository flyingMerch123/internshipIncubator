import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <div className={props.className}>
    <svg
      fill={'none'}
      height={'10'}
      viewBox={'0 0 339 10'}
      width={'339'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path d={'M323 8L339 8L331 0L323 8Z'} fill={'#4C4C4C'} />
      <path d={'M323 9.5L339 9.5L331 1.5L323 9.5Z'} fill={'#171717'} />
    </svg>
  </div>
)

export default memo(forwardRef(SvgComponent))
