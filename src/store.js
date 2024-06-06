import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './Slice/VideoSlice';
import counterReducer from './Slice/counterSlice';

export const store = configureStore({
    reducer: {
        video: videoReducer,
        counter: counterReducer
    }
});
