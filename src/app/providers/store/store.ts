import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../../../entities/entity/API/postApi'
import { albumApi } from '../../../entities/entity/API/albumApi'
import { commentApi } from '../../../entities/entity/API/commentApi'
import { todoApi } from '../../../entities/entity/API/todoApi'


export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(postApi.middleware)
      .concat(commentApi.middleware)
      .concat(albumApi.middleware)
      .concat(todoApi.middleware)
})
