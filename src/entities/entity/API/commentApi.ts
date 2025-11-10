import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Comment } from "../model/type"

export const commentApi = createApi({
    reducerPath: 'comment',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getComments: builder.query<Comment[], { limit: number, offset: number }>({
            query: ({limit, offset}) => `comments?_limit=${limit}&_offset=${offset}`
        })
    }),
})

export const { useGetCommentsQuery } = commentApi