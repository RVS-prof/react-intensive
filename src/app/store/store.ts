import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../../features/API/apislice'


export const store = configureStore({
  reducer: {
     [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})
