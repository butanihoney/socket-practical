import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    scores: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addScore: (state, action) => {
            state.scores.unshift(action.payload);
            if (state.scores.length > 10) {
                state.scores.pop();
            }
        },
    },
});

export const { addScore } = dataSlice.actions;
export default dataSlice.reducer;
