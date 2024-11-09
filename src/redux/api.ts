import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], string>({ query: () => "posts", providesTags: ["Posts"] }),
        getComments: builder.query<string, string>({ query: () => "comments" }),

        newPost: builder.mutation<Post,Post>({ query: (post)=> ({
            url: 'posts',
            method: "POST",
            body: post, 
        }),
        invalidatesTags: ["Posts"]
    })
    })
})

export const { useGetPostsQuery, useGetCommentsQuery, useNewPostMutation } = myApi