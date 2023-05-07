import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import thunk from "redux-thunk";

const API_BASE_URL = "http://127.0.0.1:4000/api";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/users/signup",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = authApi;
