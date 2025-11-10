import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Todo } from "../model/type"

export const todoApi = createApi({
    reducerPath: 'todo',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getToDo: builder.query<Todo[], { limit: number, offset: number }>({
            query: ({limit, offset}) => `todos?_limit=${limit}&_offset=${offset}`
        })
    }),
})

export const { useGetToDoQuery } = todoApi