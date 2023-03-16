import { createAsyncThunk } from "@reduxjs/toolkit";

export const setCurrentAccount = createAsyncThunk(
  'user/logUserAccount',
  async (user) => {
    return user;
  }
);

export const createUserAccount = createAsyncThunk(
  'user/createUserAccount',
  async (user) => {
      return user;
  }
);