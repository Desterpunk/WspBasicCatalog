import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBasketProducts = createAsyncThunk(
    'basketProducts/getBasketProducts',
    async () => {
        return [];
    }
);

export const addBasketProduct = createAsyncThunk(
    'basketProducts/addBasketProduct',
    async (product) => {
        return product;
    }
);

export const deleteBasketProduct = createAsyncThunk(
    'basketProducts/deleteBasketProduct',
    async (id) => {
        return id;
    }
);

export const setBasketProductTotal = createAsyncThunk(
    'basketProducts/setBasketProductTotal',
    async () => {
        return;
    }
);

export const emptyBasketProduct = createAsyncThunk(
    'basketProducts/emptyBasketProducts',
    async () => {
        return;
    }
)