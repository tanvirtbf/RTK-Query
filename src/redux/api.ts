import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], string>({ query: () => "posts" }),
        getComments: builder.query<string, string>({ query: () => "comments" }),
    })
})

export const { useGetPostsQuery, useGetCommentsQuery } = myApi