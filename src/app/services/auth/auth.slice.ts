import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: '',
}

{
  /*TODO:Remove slice if all is ok with saving accessToken in the sessionStorage */
}
const slice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    // setToken: (state, action: PayloadAction<{ data: any }>) => {
    //   state.accessToken = action.payload.data.accessToken
    // },
  },
  // extraReducers: builder => {
  //   builder
  //     .addMatcher(authAPI.endpoints.signIn.matchFulfilled, (state, action) => {
  //       state.accessToken = action.payload.accessToken
  //     })
  //     .addMatcher(authAPI.endpoints.googleAuth.matchFulfilled, (state, action) => {
  //       state.accessToken = action.payload.accessToken
  //     })
  // },
})

export const authReducer = slice.reducer
export const authActions = slice.actions
