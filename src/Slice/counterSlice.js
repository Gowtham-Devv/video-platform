import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: JSON.parse(localStorage.getItem('counter')) || 0,
    user: JSON.parse(localStorage.getItem('user')) || null
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
            localStorage.setItem('counter', JSON.stringify(state.value));
        },
        reset: state => {
            state.value = 0;
            localStorage.setItem('counter', JSON.stringify(state.value));
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    }
});

export const { increment, reset, setUser } = counterSlice.actions;
export default counterSlice.reducer;
