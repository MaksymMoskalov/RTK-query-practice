import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/coments";
const BASE_URL = "https://654441d75a0b4b04436c358f.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({ query: () => API_ENDPOINT, providesTags: ["Comments"] }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Comments"]
    }),
       updateCommentCount: builder.mutation({
      query: ({id, ...body}) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Comments"]
    }),
  })
});

export const { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentCountMutation } = commentApi


