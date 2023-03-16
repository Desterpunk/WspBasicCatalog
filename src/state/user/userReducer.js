import { createSlice } from '@reduxjs/toolkit';

import { createUserAccount, setCurrentAccount } from '../../thunkAction/userThunk';

export const initialState = {
    user: {},
};


export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setCurrentAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.user = action.payload;
        });

        builder.addCase(createUserAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.user = action.payload;
        })
    }
})

export default userReducer.reducer;
