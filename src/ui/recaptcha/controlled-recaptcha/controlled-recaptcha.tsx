import { RefAttributes } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RecaptchaProps } from '@/ui/recaptcha/recaptcha'
import { clsx } from 'clsx'

import s from '@/ui/recaptcha/recaptcha.module.scss'

type ControlledRecaptchaProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RecaptchaProps, 'onChange'> &
  RefAttributes<ReCAPTCHA>

export const ControlledReCaptcha = <T extends FieldValues>({
  control,
  defaultValue,
  error,
  name,
  ref,
  rules,
  shouldUnregister,
  ...recaptchaProps
}: ControlledRecaptchaProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  const style = {
    error: clsx(error && s.error),
    recaptcha: clsx(s.recaptcha),
    wrapper: clsx(error && s.wrapper),
  }

  return (
    <div className={style.wrapper}>
      <ReCAPTCHA {...{ onChange, ref, ...recaptchaProps }} className={style.recaptcha} />
      {error && <p className={style.error}>{error}</p>}
    </div>
  )
}
