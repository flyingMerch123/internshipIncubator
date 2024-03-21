import { ReactElement, useEffect, useMemo } from 'react'

import { UserProfileType, setDateFormat, useGeneralSettings, useTranslation } from '@/app'
import { menuNavigation } from '@/app/constants'
import { useLoadingSpinner } from '@/app/services/application/application.hooks'
import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import {
  useGetProfileQuery,
  useUpdateUserProfileMutation,
} from '@/app/services/profile/profile.api'
import { GeneralSettingsType } from '@/app/services/profile/profile.api.types'
import { ControlledCalendar, ControlledSelect, LoadingSpinner } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, TextArea, TextField } from '@/ui'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'
import { useRouter } from 'next/router'

import s from './general-information.module.scss'

type LocationType = {
  city: string
  country?: string
}

type UserProfileModel = UserProfileType & { country?: string }

const GeneralInformation = () => {
  const { data, isLoading: isProfileLoading } = useGetProfileQuery()
  const [updateProfile, { isLoading: isProfileUpdating }] = useUpdateUserProfileMutation()
  const [getCities, { data: cities, isLoading: citiesLoading }] = useGetCitiesMutation()

  const { t } = useTranslation()
  const { push } = useRouter()
  const { aboutMe, birthday, city, country, firstName, lastName, submitFormBtn, username } =
    t.profileSettings.generalSettings
  const { stopLoadingSpinner } = useLoadingSpinner({
    active: isProfileLoading || isProfileUpdating,
    title: (isProfileUpdating && 'Saving...') || 'Loading...',
  })
  const userProfile: UserProfileModel | undefined = useMemo(() => {
    if (data) {
      const { avatars, createdAt, id, ...rest } = data

      const location = JSON.parse(data.city)

      return {
        ...rest,
        city: location?.city,
        country: location?.country,
        dateOfBirth: setDateFormat(data?.dateOfBirth),
      }
    }
  }, [data])

  const {
    control,
    formState: { errors, isDirty, isLoading, isValid },
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
  } = useGeneralSettings(userProfile)

  const isDisabledSubmit = !isValid || isLoading
  const selectedCountry = watch('country')

  // @ts-ignore
  const onSubmit = handleSubmit((settingsData: GeneralSettingsType) => {
    const { aboutMe, city, country, dateOfBirth, firstName, lastName, userName } = settingsData
    //const { id } = data
    const location: LocationType = {
      city: city || '',
      country: country || '',
    }
    const serializedCity = JSON.stringify(location)
    const date = dateOfBirth ? new Date(dateOfBirth).toISOString() : null

    updateProfile({
      aboutMe: aboutMe || null,
      city: serializedCity,
      dateOfBirth: date,
      firstName,
      lastName,
      userName,
    })
      .unwrap()
      .then(
        void push(menuNavigation.profile(data?.id)).finally(() => {
          stopLoadingSpinner()
        })
      )
  })

  useEffect(() => {
    reset(userProfile)
  }, [data])

  useEffect(() => {
    if (selectedCountry) {
      setValue('city', undefined)
      getCities({ country: selectedCountry })
    }
  }, [getCities, selectedCountry])

  return (
    <div className={s.container}>
      <form className={s.content}>
        <div className={s.image}>
          <AccountImagePicker />
        </div>

        <div className={s.wrapper}>
          <TextField
            {...register('userName')}
            error={errors?.userName?.message}
            label={username.label}
            required
          />
          <TextField
            {...register('firstName')}
            error={errors?.firstName?.message}
            label={firstName.label}
            required
          />
          <TextField
            {...register('lastName')}
            error={errors?.lastName?.message}
            label={lastName.label}
            required
          />

          <ControlledCalendar
            control={control}
            error={errors?.dateOfBirth?.message}
            label={birthday.label}
            name={'dateOfBirth'}
          />

          <div className={s.select}>
            <ControlledSelect
              control={control}
              label={country.label}
              name={'country'}
              options={COUNTRIES_DATA}
            />
            <ControlledSelect
              control={control}
              disabled={citiesLoading}
              isLoading={citiesLoading}
              label={city.label}
              name={'city'}
              options={cities}
            />
          </div>

          <TextArea
            {...register('aboutMe')}
            label={`${aboutMe.label}`}
            maxLength={200}
            placeholder={aboutMe.placeholder}
          />
        </div>
      </form>

      <div className={s.divider}></div>

      <Button className={s.btn} disabled={isDisabledSubmit} onClick={onSubmit}>
        {submitFormBtn.label}
      </Button>
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
