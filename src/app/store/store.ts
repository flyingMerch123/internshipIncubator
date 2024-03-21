import { applicationReducer } from '@/app/services/application/application.slice'
import { authReducer } from '@/app/services/auth/auth.slice'
import { commonApi } from '@/app/services/common/common.api'
import { locationApi } from '@/app/services/countries/countries.api'
import { googleApi } from '@/app/services/google/google.api'
import { ipGeolocationApi } from '@/app/services/ipgeolocation/ipgeolocation.api'
import { modalsReducer } from '@/app/services/modals/modals.slice'
import { postsSlice } from '@/app/services/posts/posts.slice'
import { postSliderSlice } from '@/app/services/posts/slider.slice'
import { profileSlice } from '@/app/services/profile/profile.slice'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      commonApi.middleware,
      googleApi.middleware,
      locationApi.middleware,
      ipGeolocationApi.middleware
    ),
  reducer: {
    application: applicationReducer,
    auth: authReducer,
    [commonApi.reducerPath]: commonApi.reducer,
    [googleApi.reducerPath]: googleApi.reducer,
    [ipGeolocationApi.reducerPath]: ipGeolocationApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    modals: modalsReducer,
    post: postsSlice,
    profile: profileSlice,
    slider: postSliderSlice,
  },
})

setupListeners(store.dispatch)
const makeStore = () => store

export type AppStore = ReturnType<typeof makeStore>
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
})
