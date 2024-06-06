import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clickedButtons: JSON.parse(localStorage.getItem('clickedButtons')) || {}
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        toggleClick: (state, action) => {
            const videoId = action.payload;
            state.clickedButtons[videoId] = !state.clickedButtons[videoId];
            localStorage.setItem('clickedButtons', JSON.stringify(state.clickedButtons));
        }
    }
});

export const { toggleClick } = videoSlice.actions;
export default videoSlice.reducer;
