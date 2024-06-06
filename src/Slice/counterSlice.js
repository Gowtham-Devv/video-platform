import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: JSON.parse(localStorage.getItem('counter')) || 0
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
        }
    }
});

export const { increment,reset } = counterSlice.actions;
export default counterSlice.reducer;
