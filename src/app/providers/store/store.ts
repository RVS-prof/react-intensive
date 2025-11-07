import { configureStore } from '@reduxjs/toolkit'
import { PostApiSlice } from '../../../features/API/apislice'

export const store = configureStore({
  reducer: {
     [PostApiSlice.reducerPath]: PostApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PostApiSlice.middleware)
})
