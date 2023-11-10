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
        d="M34.0456 8.0669C37.3701 -0.559108 30.9132 0.0442433 30.9132 0.0442433C26.7705 0.0442433 21.5917 3.81707 21.5917 3.81707C21.5917 3.81707 15.4149 2.15277 9.23741 5.88855C2.50527 10.1793 2.72746 17.7992 2.72746 17.7992C8.20164 9.95746 15.8215 6.77631 15.8215 6.77631V7.29417C4.57682 14.9838 1.91352 26.2327 1.24773 28.5261C0.581873 30.8191 1.02583 35.9647 5.7606 35.9647C10.4954 35.9647 15.3038 32.1509 15.3038 32.1509C15.3038 32.1509 16.3395 32.3731 19.1504 32.3731C30.9872 32.3731 33.7981 21.9419 33.7981 21.9419H23.2931C23.2931 21.9419 22.5533 25.3449 18.7807 25.3449C13.6023 25.3449 13.898 19.9445 13.898 19.9445H33.9463C34.9079 6.03663 22.7754 4.03926 22.7754 4.03926C22.7754 4.03926 27.063 1.00619 30.7652 1.00619C36.6328 1.00619 33.8581 7.87966 33.8581 7.87966L34.0456 8.0669ZM14.7166 31.9971C14.7166 31.9971 7.4912 36.3819 4.24783 33.3438C2.51026 30.3053 5.33394 26.0025 5.33394 26.0025C5.33394 26.0025 7.72309 30.4332 14.7166 31.9971ZM23.4073 15.2115H13.8726C13.8726 15.2115 13.752 10.565 18.7605 10.565C23.5976 10.565 23.4073 15.2115 23.4073 15.2115Z"
        fill={color}
      />
    </svg>
  )
}
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
