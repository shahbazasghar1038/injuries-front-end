import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  caseId: null, // Add caseId to the initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearAuthData: (state) => {
      state.user = null;
      state.token = null;
    },
    setCaseId: (state, action) => {
      state.caseId = action.payload; // Set the caseId
    },
  },
});

export const { setAuthData, clearAuthData, setCaseId } = authSlice.actions;

export default authSlice.reducer;
