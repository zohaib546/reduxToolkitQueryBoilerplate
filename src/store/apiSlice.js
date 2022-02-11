import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
    }),
    addNewProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddNewProductMutation,
} = apiSlice;
