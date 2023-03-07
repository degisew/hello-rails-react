import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const fetchGreetingAsyncThank = createAsyncThunk(
    "fetchGreetingAsyncThank",
    async () => {
        const response = await fetch('/api/greets');
        const data = response.json();
        return data;
    }
);

const initialState = {
    greets: [],
};

const greetReducer = createSlice({
    name: "greet",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGreetingAsyncThank.fulfilled, (state, { payload }) => {
            state.greets = payload;
        });
    },
});

const getAllGreets = (state) => state.greet.greets;
export { getAllGreets, fetchGreetingAsyncThank };
export default greetReducer.reducer;