import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from '../features/sessions/sessionSlice';

const store = configureStore({
    reducer: {
        sessions: sessionReducer,
    },
});

export default store;
