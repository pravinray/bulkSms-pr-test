// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "***",
//   "X-RapidAPI-Host": "dummyjson.com",
// };

// const baseUrl = "https://dummyjson.com/";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// export const productApi = createApi({
//   reducePath: "productsApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
//   endpoints: (builder = {
//     getAllProducts: builder.query({
//       query: () => "products",
//     }),
//   }),
// });
// export const { useGetAllProductsQuery } = productApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = productApi;
