import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {}
};

export const caseSlice = createSlice({
    name: 'caseApi',
    initialState,
    reducers: {
        getCaseData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { getCaseData } = caseSlice.actions;

export const caseData = (state) => state.caseApi;

export default caseSlice.reducer;