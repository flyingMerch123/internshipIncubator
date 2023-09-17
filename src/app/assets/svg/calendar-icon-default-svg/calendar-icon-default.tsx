import * as React from "react"
import { SVGProps, memo } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M15 2h-1V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3ZM3 4h1v1a1 1 0 0 0 2 0V4h6v1a1 1 0 0 0 2 0V4h1a1 1 0 0 1 1 1v4H2V5a1 1 0 0 1 1-1Zm12 14H3a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1Z"
    />
    <path
      fill="#fff"
      d="M5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-2H9a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z"
    />
  </svg>
)
export const CalendarDefault = memo(SvgComponent)
