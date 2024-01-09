import { ReactElement, useEffect, useMemo } from 'react'

import s from './general-information.module.scss'

import { setDateFormat, useGeneralSettings, UserProfileType, useTranslation } from '@/app'
import { useLocation } from '@/app/hooks/useLocation'
import {
  useGetProfileQuery,
  useUpdateUserProfileMutation,
} from '@/app/services/profile/profile.api'
import { GeneralSettingsType } from '@/app/services/profile/profile.api.types'
import { ControlledCalendar, ControlledSelect, LoaderV2 } from '@/components'
import { AccountImagePicker } from '@/modules'
import { ProfileSettingLayout } from '@/templates'
import { Button, TextArea, TextField } from '@/ui'
import { COUNTRIES_DATA } from '@/ui/custom-select/location-data'

const GeneralInformation = () => {
  const { data, isLoading: isProfileLoading } = useGetProfileQuery()
  const [updateProfile, { isLoading: isProfileUpdating }] = useUpdateUserProfileMutation()
  const { getCities, mappedCities } = useLocation()

  const { t } = useTranslation()
  const { username, firstName, lastName, birthday, country, city, aboutMe, submitFormBtn } =
    t.profileSettings.generalSettings

  const userProfile: UserProfileType = useMemo(() => {
    if (data) {
      const { id, avatars, createdAt, ...rest } = data

      return {
        ...rest,
        dateOfBirth: setDateFormat(data?.dateOfBirth),
      }
    }
  }, [data])

  const {
    reset,
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, isDirty, isLoading },
  } = useGeneralSettings(userProfile)

  const isDisabledSubmit = !isDirty || !isValid || isLoading
  const selectedCountry = watch('country')

  const onSubmit = handleSubmit((data: GeneralSettingsType) => {
    updateProfile({ ...data, dateOfBirth: data.dateOfBirth?.toString() })
  })

  useEffect(() => {
    reset(userProfile)
  }, [data])

  useEffect(() => {
    if (selectedCountry) {
      getCities({ country: selectedCountry })
    }
  }, [getCities, selectedCountry])

  const loaderLabel: string = (isProfileUpdating && 'Saving...') || 'Loading...'

  return (
    <div className={s.container}>
      <form className={s.content}>
        <div className={s.image}>
          <AccountImagePicker />
        </div>

        <div className={s.wrapper}>
          <TextField
            {...register('userName')}
            label={username.label}
            required
            error={errors?.userName?.message}
          />
          <TextField
            {...register('firstName')}
            label={firstName.label}
            required
            error={errors?.firstName?.message}
          />
          <TextField
            {...register('lastName')}
            label={lastName.label}
            required
            error={errors?.lastName?.message}
          />

          <ControlledCalendar
            label={birthday.label}
            control={control}
            name={'dateOfBirth'}
            error={errors?.dateOfBirth?.message}
          />

          <div className={s.select}>
            <ControlledSelect
              label={country.label}
              control={control}
              name={'country'}
              options={COUNTRIES_DATA}
            />
            <ControlledSelect
              label={city.label}
              options={mappedCities}
              name={'city'}
              control={control}
            />
          </div>

          <TextArea
            {...register('aboutMe')}
            label={`${aboutMe.label}`}
            placeholder={aboutMe.placeholder}
            maxLength={200}
          />
        </div>
      </form>

      <div className={s.divider}></div>

      <Button className={s.btn} onClick={onSubmit} disabled={isDisabledSubmit}>
        {submitFormBtn.label}
      </Button>

      <LoaderV2 isLoading={isProfileLoading || isProfileUpdating} label={loaderLabel} />
    </div>
  )
}

GeneralInformation.getLayout = function getLayout(page: ReactElement) {
  return <ProfileSettingLayout>{page}</ProfileSettingLayout>
}

export default GeneralInformation
