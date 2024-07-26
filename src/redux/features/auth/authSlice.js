import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    errorMessage: '',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isAuthenticated = true;
            state.errorMessage = '';
        },
        loginFailure: (state) => {
            state.errorMessage = 'Invalid credentials';
        },
    },
});

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
