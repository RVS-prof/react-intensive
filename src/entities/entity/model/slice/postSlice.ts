import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { IPost } from '../../../type';

const postsAdapter = createEntityAdapter<IPost>({
  // sortComparer: (a, b) => b.id - a.id, 
});

const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: postsAdapter.addOne,
    postsReceived: postsAdapter.setAll,
    postUpdated: postsAdapter.updateOne,
    postRemoved: postsAdapter.removeOne,
    postsCleared: postsAdapter.removeAll,
  },
});

export const {
  postAdded,
  postsReceived,
  postUpdated,
  postRemoved,
  postsCleared,
} = postSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
  selectEntities: selectPostEntities,
  selectTotal: selectTotalPosts,
} = postsAdapter.getSelectors();

export default postSlice.reducer;