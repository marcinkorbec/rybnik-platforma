import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sessions: [],
    loading: false,
    error: null,
};

const sessionSlice = createSlice({
    name: 'sessions',
    initialState,
    reducers: {
        fetchSessionsStart(state) {
            state.loading = true;
        },
        fetchSessionsSuccess(state, action) {
            state.loading = false;
            state.sessions = action.payload;
        },
        fetchSessionsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchSessionsStart, fetchSessionsSuccess, fetchSessionsFailure } = sessionSlice.actions;

export default sessionSlice.reducer;
