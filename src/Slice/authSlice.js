import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: null,
};

const storedUserData = localStorage.getItem('userData');
if (storedUserData) {
  try {
    initialState.isLoggedIn = true;
    initialState.userData = JSON.parse(storedUserData);
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
    localStorage.removeItem('userData');
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
      localStorage.setItem('userData', JSON.stringify(state.userData));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      localStorage.removeItem('userData');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
