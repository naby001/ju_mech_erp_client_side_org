import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    fullName: "John Doe",
    avatar: "/default-avatar.png",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;