import { createAsyncThunk } from "@reduxjs/toolkit";
import productsData from "../product-data";

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    return productsData;
  }
);