import { useForm } from 'react-hook-form'

import { useTranslation } from '@/app/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useForgotPasswordForm = () => {
  const { t } = useTranslation()
  const { email, token } = t.forgotPasswordPage

  const ForgotPasswordSchema = z.object({
    email: z
      .string({ required_error: `${email.validation.required}` })
      .trim()
      .nonempty(`${email.validation.required}`)
      .email({ message: `${email.validation.invalidEmail}` }),
    token: z
      .string({
        invalid_type_error: `${token.validation.required}`,
        required_error: `${token.validation.required}`,
      })
      .trim()
      .nonempty(),
  })

  type ForgotPassFormType = z.infer<typeof ForgotPasswordSchema>

  return useForm<ForgotPassFormType>({
    defaultValues: {
      email: '',
      token: '',
    },
    mode: 'all',
    resolver: zodResolver(ForgotPasswordSchema),
  })
}
