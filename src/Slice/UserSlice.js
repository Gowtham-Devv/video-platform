// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    resetUser: (state) => null,
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
