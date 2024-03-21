import { forwardRef } from 'react'
import ReCAPTCHA, { ReCAPTCHAProps } from 'react-google-recaptcha'

export type RecaptchaProps = {
  error?: string
} & ReCAPTCHAProps
export const RECAPTCHA = forwardRef<ReCAPTCHA, RecaptchaProps>((props, ref) => {
  return <ReCAPTCHA {...props} ref={ref} />
})
