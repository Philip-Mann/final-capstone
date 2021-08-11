import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const casesDataBase = createApi({
    reducerPath: 'casesDataBase',
    baseQuery: fetchBaseQuery({ baseUrl: '/'}),
    endpoints: (builder) => ({
        getCases: builder.query({
            query: () => {
                return '/api/cases';
            }
        }),
        getCase: builder.query({
            query: (id) => {
                return `/api/cases/${id}`;
            }
        }),
    }),
});

export const { useGetCasesQuery, useGetCaseQuery } = casesDataBase;