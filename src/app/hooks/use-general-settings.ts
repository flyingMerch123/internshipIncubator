import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { isOldEnough, useTranslation } from '@/app'

export type GeneralSettingsType = {
  userName: string
  firstName: string
  lastName: string
  birthday?: Date
  country?: string
  city?: string
  aboutMe?: string
}

const defaultSettingsValues = {
  userName: '',
  firstName: '',
  lastName: '',
  birthday: undefined,
  country: '',
  city: '',
  aboutMe: '',
}

export const useGeneralSettings = () => {
  const { t } = useTranslation()
  const { username, firstName, lastName, birthday } = t.profileSettings.generalSettings

  const GeneralSettingsSchema = z
    .object({
      userName: z
        .string()
        .trim()
        .min(6, `${username.validation.length}`)
        .max(30, `${username.validation.maxLength}`)
        .regex(/^[0-9a-zA-Z_;-]+$/, `${username.validation.pattern}`),
      firstName: z
        .string()
        .trim()
        .min(2, `${firstName.validation.length}`)
        .max(20, `${firstName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${firstName.validation.pattern}`),
      lastName: z
        .string()
        .trim()
        .min(2, `${lastName.validation.length}`)
        .max(20, `${lastName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${lastName.validation.pattern}`),
      birthday: z.date().optional(),
      country: z.string().optional(),
      city: z.string().optional(),
      aboutMe: z.string().optional(),
    })
    .refine(
      data => {
        if (data.birthday) {
          const ageLimit: number = 13
          const dateOfBirth = new Date(data.birthday)

          return isOldEnough(dateOfBirth, ageLimit)
        }

        return data
      },
      {
        message: `${birthday.validation.error}`,
        path: ['birthday'], // path of error
      }
    )

  type GeneralSettingsFormType = z.infer<typeof GeneralSettingsSchema>

  return useForm<GeneralSettingsFormType>({
    resolver: zodResolver(GeneralSettingsSchema),
    defaultValues: {
      ...defaultSettingsValues,
    },
    mode: 'all',
  })
}