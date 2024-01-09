import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { profileApi } from '@/app/services/profile/profile.api'
import { GeneralSettingsType, UserProfileModel } from '@/app/services/profile/profile.api.types'

const defaultSettingsState: GeneralSettingsType = {
  userName: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  country: '',
  city: '',
  aboutMe: '',
}

const profileSettings = createSlice({
  name: 'profile',
  initialState: defaultSettingsState,
  reducers: {
    updateSettings(state, action: PayloadAction<UserProfileModel>) {
      const { userName, firstName, lastName, dateOfBirth, aboutMe } = action.payload

      state.userName = userName
      state.firstName = firstName
      state.lastName = lastName
      state.dateOfBirth = dateOfBirth
      state.aboutMe = aboutMe
    },
  },
  extraReducers: builder => {
    builder.addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => {
      const { userName, firstName, lastName, dateOfBirth, aboutMe } = action.payload

      state.userName = userName
      state.firstName = firstName
      state.lastName = lastName
      state.dateOfBirth = dateOfBirth
      state.aboutMe = aboutMe
    })
  },
})

export const { updateSettings } = profileSettings.actions
export const profileSlice = profileSettings.reducer
