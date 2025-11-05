import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/comments' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`
        })
    }),

})

console.log(apiSlice);


export const { useGetPostsQuery }:any = apiSlice
