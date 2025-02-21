import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: userId, name: "John" }), 1500)
  );

export const getUserById = createAsyncThunk(
  "getUserById",
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch (error) {
      thunkApi.rejectWithValue({ error });
    }
  }
);
