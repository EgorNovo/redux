import { createSlice } from "@reduxjs/toolkit";
import { getUserById } from "./user.actions";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserById.rejected),
      (state, { error }) => {
        state.error = error;
        state.user = {};
      };
  },
});

export const { actions, reducer, extraReducers } = userSlice;
