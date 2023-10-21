import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTranslation } from '@/app/hooks'

export const useSignupForm = () => {
  const { t } = useTranslation()

  const {
    signUpForm: { formErrors },
  } = t.authPages.signUpPage
  const { email, password, userName, confirmPassword } = formErrors

  const signUpFormSchema = z
    .object({
      userName: z
        .string({ required_error: `${userName.required}` })
        .trim()
        .min(6, `${userName.length}`)
        .max(30, `${userName.maxLength}`)
        .regex(/^[0-9A-Za-z_-]+$/),
      email: z
        .string({ required_error: `${email.required}` })
        .trim()
        .nonempty(`${email.required}`)
        .email(`${email.invalidEmail}`),

      password: z
        .string({ required_error: `${password.required}` })
        .trim()
        .min(6, `${password.length}`)
        .max(20, `${password.maxLength}`)
        .regex(
          /(?=.*[0-9])(?=.*[!"#$%&'()*+,-_./:;<=>?@[\]^{|}~])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!"#$%&'()*+,-_./:;<=>?@[\]^{|}~]{6,}/g,
          `${password.pattern}`
        ),
      confirmPassword: z.string({ required_error: `${confirmPassword.required}` }).trim(),
      policy: z.literal<boolean>(true),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          message: `${confirmPassword.required}`,
          code: z.ZodIssueCode.custom,
          path: ['confirmPassword'],
        })
      }

      return data
    })

  type SignUpFormType = z.infer<typeof signUpFormSchema>

  return useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onBlur',
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      userName: '',
      policy: false,
    },
  })
}
