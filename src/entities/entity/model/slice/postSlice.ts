// postSlice.ts
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { IAPIEntity } from '../../../type';
import { postApi } from '../../API/postApi';

const postsAdapter = createEntityAdapter<IAPIEntity>();

// Явно указываем тип initialState
const initialState = postsAdapter.getInitialState({
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
  error: null as string | null,
});

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: postsAdapter.addOne,
    postsReceived: postsAdapter.setAll,
    postUpdated: postsAdapter.updateOne,
    postRemoved: postsAdapter.removeOne,
    postsCleared: postsAdapter.removeAll,
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        postApi.endpoints.getPosts.matchFulfilled,
        (state, action) => {
          postsAdapter.setAll(state, action.payload);
          state.status = 'succeeded';
        }
      )
      .addMatcher(
        postApi.endpoints.getPosts.matchPending,
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        postApi.endpoints.getPosts.matchRejected,
        (state, action) => {
          console.log('❌ postApi.getPosts.rejected:', action.error);
          state.status = 'failed';
          state.error = action.error.message || 'Failed to fetch posts';
        }
      );
  },
});

export const {
  postAdded,
  postsReceived,
  postUpdated,
  postRemoved,
  postsCleared,
  clearError,
} = postSlice.actions;

export const postsSelectors = postsAdapter.getSelectors();

export const selectAllPosts = (state: any) => {
  try {
    const postsState = state.posts;
    if (!postsState) {
      console.warn('⚠️ postsState is undefined');
      return [];
    }
    const result = postsSelectors.selectAll(postsState);
    return result;
  } catch (error) {
    console.error('💥 Error in selectAllPosts:', error);
    return [];
  }
};

export const selectPostById = (state: any, id: number) => {
  try {
    const postsState = state.posts;
    return postsState ? postsSelectors.selectById(postsState, id) : undefined;
  } catch (error) {
    console.error('Error in selectPostById:', error);
    return undefined;
  }
};

export const selectPostsStatus = (state: any) => {
  try {
    return state.posts?.status || 'idle';
  } catch (error) {
    console.error('Error in selectPostsStatus:', error);
    return 'idle';
  }
};

export const selectPostsError = (state: any) => {
  try {
    return state.posts?.error || null;
  } catch (error) {
    console.error('Error in selectPostsError:', error);
    return null;
  }
};

export default postSlice.reducer;