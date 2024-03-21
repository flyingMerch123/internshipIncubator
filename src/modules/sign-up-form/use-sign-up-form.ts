import { useForm } from 'react-hook-form'

import { useTranslation } from '@/app/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const useSignupForm = () => {
  const { t } = useTranslation()

  const {
    signUpForm: { formErrors },
  } = t.authPages.signUpPage
  const { confirmPassword, email, password, userName } = formErrors

  const signUpFormSchema = z
    .object({
      confirmPassword: z.string({ required_error: `${confirmPassword.required}` }).trim(),
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
          /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])[0-9A-Za-z!#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]{6,20}$/,
          `${password.pattern}`
        ),
      policy: z.literal<boolean>(true),
      userName: z
        .string({ required_error: `${userName.required}` })
        .trim()
        .min(6, `${userName.length}`)
        .max(30, `${userName.maxLength}`)
        .regex(/^[0-9A-Za-z_-]+$/),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `${confirmPassword.matchPasswords}`,
          path: ['confirmPassword'],
        })
      }

      return data
    })

  type SignUpFormType = z.infer<typeof signUpFormSchema>

  return useForm<SignUpFormType>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      policy: false,
      userName: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(signUpFormSchema),
  })
}
