import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { IPost } from "../PostLengthFilter/type"

export const PostApiSlice = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], { limit: number, offset: number }>({
            query: ({limit, offset}) => `posts?_limit=${limit}&_offset=${offset}`
        })
    }),

})

export const { useGetPostsQuery } = PostApiSlice
