import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import type { IAPIEntity } from "../../type"

export const commentApi = createApi({
    reducerPath: 'comment',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getComments: builder.query<IAPIEntity[], { limit: number, offset: number }>({
            query: ({limit, offset}) => `comments?_limit=${limit}&_offset=${offset}`
        })
    }),
})

export const { useGetCommentsQuery } = commentApi