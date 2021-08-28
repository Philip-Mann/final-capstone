import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            // console.log("userSlice:", action.payload)
            state.user = action.payload
        },
    },
});

export const { updateUser } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;