import { useForm } from 'react-hook-form'

import { useTranslation } from '@/app/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]).*$/

export const useSignInForm = () => {
  const { t } = useTranslation()

  const {
    signInForm: { formErrors },
  } = t.authPages.signInPage
  const { email, password } = formErrors

  const loginFormSchema = z.object({
    email: z
      .string({
        invalid_type_error: `${email.invalidEmailFormat}`,
        required_error: `${email.required}`,
      })
      .trim()
      .nonempty(`${email.required}`)
      .email(`${email.invalidEmailFormat}`),
    password: z
      .string({ required_error: `${password.required}` })
      .trim()
      .min(6, `${password.length}`)
      .max(20, `${password.maxLength}`)
      .regex(passwordRegex, `${password.pattern}`),
  })

  type LoginFormType = z.infer<typeof loginFormSchema>

  return useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(loginFormSchema),
  })
}
