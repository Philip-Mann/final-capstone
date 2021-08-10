import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {}
};

export const casesSlice = createSlice({
    name: 'casesApi',
    initialState,
    reducers: {
        getCasesData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { getCasesData } = casesSlice.actions;

export const casesData = (state) => state.casesApi;

export default casesSlice.reducer;