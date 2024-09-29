import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeView: 'Pulpit',
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setActiveView: (state, action) => {
            state.activeView = action.payload;
        },
    },
});

export const { setActiveView } = sidebarSlice.actions;
export default sidebarSlice.reducer;
