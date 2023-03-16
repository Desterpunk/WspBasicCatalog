import { createSlice } from '@reduxjs/toolkit';

import { getProducts } from '../../thunkAction/productsThunk';

export const initialState = {
    products: [],
};


export const productsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.products = action.payload;
        })
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default productsReducer.reducer;
