import { useForm } from 'react-hook-form'

import { useTranslation } from '@/app/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useNewPasswordForm = () => {
  const { t } = useTranslation()
  const { password, passwordConfirmation } = t.newPasswordPage

  const NewPasswordSchema = z
    .object({
      confirmPassword: z
        .string({ required_error: `${passwordConfirmation.validation.required}` })
        .trim(),
      password: z
        .string({ required_error: `${password.validation.required}` })
        .trim()
        .min(6, `${password.validation.length}`)
        .max(20, `${password.validation.maxLength}`)
        .regex(
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*[а-яА-Я])(?!.* ).{6,20}$/,
          `${password.validation.pattern}`
        ),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: `${passwordConfirmation.validation.required}`,
      path: ['confirmPassword'],
    })

  type NewPassFormType = z.infer<typeof NewPasswordSchema>

  return useForm<NewPassFormType>({
    defaultValues: {
      confirmPassword: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(NewPasswordSchema),
  })
}
