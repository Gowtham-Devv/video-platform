import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './Slice/VideoSlice';
import counterReducer from './Slice/counterSlice';
import  userReducer  from './Slice/UserSlice';
import authReducer from './Slice/authSlice';
import rootReducer from './Slice/rootSlice';


export const store = configureStore({
    reducer: {
        video: videoReducer,
        counter: counterReducer,
        user: userReducer,
        auth: authReducer,
        roots:rootReducer
    }
});
