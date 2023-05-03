import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5174/",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getproduct: builder.query({
      query: () => "/src/services/data/products.json",
    }),
  }),
});
export const useGetProductQuery = productApi.endpoints.getproduct.useQuery;
