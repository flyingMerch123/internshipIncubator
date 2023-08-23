/*

    import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
    import { setupListeners } from '@reduxjs/toolkit/dist/query'

    import featureReducer from './features'
    import { loginApi } from './services/'

    export const store = configureStore({
    reducer: {
        featureReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat([userApi.middleware]),
    })

    setupListeners(store.dispatch)

    export type RootState = ReturnType<typeof store.getState>
    export type AppDispatch = typeof store.dispatch

*/
