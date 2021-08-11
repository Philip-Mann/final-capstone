import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const casesDataBase = createApi({
    reducerPath: 'casesDataBase',
    baseQuery: fetchBaseQuery({ baseUrl: '/'}),
    endpoints: (builder) => ({
        getCases: builder.query({
            query: () => {
                return '/cases';
            }
        }),
    }),
});

export const { useGetCasesQuery } = casesDataBase;