import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { User } from '../type';

const usersAdapter = createEntityAdapter<User>({
  // sortComparer: (a, b) => b.id - a.id, 
});

const initialState = usersAdapter.getInitialState();

const userslice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    postAdded: usersAdapter.addOne,
    usersReceived: usersAdapter.setAll,
    postUpdated: usersAdapter.updateOne,
    postRemoved: usersAdapter.removeOne,
    usersCleared: usersAdapter.removeAll,
  },
});

export const {
  postAdded,
  usersReceived,
  postUpdated,
  postRemoved,
  usersCleared,
} = userslice.actions;

export const {
  selectAll: selectAllusers,
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
  selectTotal: selectTotalusers,
} = usersAdapter.getSelectors();

export default userslice.reducer;