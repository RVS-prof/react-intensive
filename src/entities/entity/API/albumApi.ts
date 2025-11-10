import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import type { IAPIEntity } from "../../type"

export const albumApi = createApi({
    reducerPath: 'album',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getAlbum: builder.query<IAPIEntity[], { limit: number, offset: number }>({
            query: ({limit, offset}) => `albums?_limit=${limit}&_offset=${offset}`
        })
    }),
})

export const { useGetAlbumQuery } = albumApi