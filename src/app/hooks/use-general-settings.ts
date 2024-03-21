import { useForm } from 'react-hook-form'

import { isOldEnough, useTranslation } from '@/app'
import { UserProfileModel } from '@/app/services/profile/profile.api.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type UserProfileType = Omit<UserProfileModel, 'avatars' | 'createdAt' | 'id'>

export const useGeneralSettings = (userProfile: UserProfileType | undefined) => {
  const { t } = useTranslation()
  const { birthday, firstName, lastName, username } = t.profileSettings.generalSettings

  const GeneralSettingsSchema = z
    .object({
      aboutMe: z.string().optional(),
      city: z.string().optional(),
      country: z.string().optional(),
      dateOfBirth: z.union([z.date(), z.string()]).optional(),
      firstName: z
        .string()
        .trim()
        .min(1, `${firstName.validation.length}`)
        .max(20, `${firstName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${firstName.validation.pattern}`),
      lastName: z
        .string()
        .trim()
        .min(1, `${lastName.validation.length}`)
        .max(20, `${lastName.validation.maxLength}`)
        .regex(/^[a-zA-Zа-яА-Я]+$/, `${lastName.validation.pattern}`),
      userName: z
        .string()
        .trim()
        .min(6, `${username.validation.length}`)
        .max(30, `${username.validation.maxLength}`)
        .regex(/^[0-9a-zA-Z_;-]+$/, `${username.validation.pattern}`),
    })
    .refine(
      data => {
        if (data.dateOfBirth) {
          const ageLimit: number = 13
          const dateOfBirth = new Date(data.dateOfBirth)

          return isOldEnough(dateOfBirth, ageLimit)
        }

        return data
      },
      {
        message: `${birthday.validation.error}`,
        path: ['dateOfBirth'],
      }
    )

  type GeneralSettingsFormType = z.infer<typeof GeneralSettingsSchema>

  return useForm<GeneralSettingsFormType>({
    defaultValues: {
      ...userProfile,
    },
    mode: 'all',
    resolver: zodResolver(GeneralSettingsSchema),
  })
}
