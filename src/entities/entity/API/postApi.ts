import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Post } from "../model/type";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], { limit: number, offset: number }>({
            query: ({limit, offset}) => `posts?_limit=${limit}&_offset=${offset}`,

            providesTags: ['Post'],
        }),

        createPost: builder.mutation<Post, Partial<Post>>({
            query: (newPost) => ({
                url: 'posts',
                method: 'POST',
                body: newPost,
            }),

            invalidatesTags: ['Post'],
        }),

        updatePost: builder.mutation<Post, { id: number; changes: Partial<Post> }>({
            query: ({ id, changes }) => ({
                url: `posts/${id}`,
                method: 'PUT',
                body: changes,
            }),

            invalidatesTags: ['Post'],
        }),

        deletePost: builder.mutation<void, number>({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),

            invalidatesTags: ['Post'],
        }),
    }),
})

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi;