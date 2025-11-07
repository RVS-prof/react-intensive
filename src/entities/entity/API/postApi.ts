import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import type { IAPIEntity } from "../../type"

export const postApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<IAPIEntity[], { limit: number, offset: number }>({
            query: ({limit, offset}) => `posts?_limit=${limit}&_offset=${offset}`
        })
    }),
})

export const { useGetPostsQuery } = postApi