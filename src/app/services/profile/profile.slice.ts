import { profileApi } from '@/app/services/profile/profile.api'
import { GeneralSettingsType, UserProfileModel } from '@/app/services/profile/profile.api.types'
import { publicPostsApi } from '@/app/services/public-posts/public-posts.api'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const defaultSettingsState: GeneralSettingsType = {
  aboutMe: '',
  city: '',
  country: '',
  dateOfBirth: '',
  firstName: '',
  lastName: '',
  posts: { totalCount: 0 },
  userName: '',
}

const profileSettings = createSlice({
  extraReducers: builder => {
    builder
      .addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => {
        const { aboutMe, dateOfBirth, firstName, lastName, userName } = action.payload

        state.userName = userName
        state.firstName = firstName
        state.lastName = lastName
        state.dateOfBirth = dateOfBirth
        state.aboutMe = aboutMe
      })
      .addMatcher(publicPostsApi.endpoints.getPublicPostsByUser.matchFulfilled, (state, action) => {
        state.posts.totalCount = action.payload.totalCount
      })
  },
  initialState: defaultSettingsState,
  name: 'profile',
  reducers: {
    updateSettings(state, action: PayloadAction<UserProfileModel>) {
      const { aboutMe, dateOfBirth, firstName, lastName, userName } = action.payload

      state.userName = userName
      state.firstName = firstName
      state.lastName = lastName
      state.dateOfBirth = dateOfBirth
      state.aboutMe = aboutMe
    },
  },
})

export const { updateSettings } = profileSettings.actions
export const profileSlice = profileSettings.reducer
