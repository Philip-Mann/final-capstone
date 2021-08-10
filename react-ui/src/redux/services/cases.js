import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const casesDataBase = createApi({
    reducerPath: 'caseDataBase',
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