import { configureStore } from "@reduxjs/toolkit";
import greetReducer from "./greetReducer";

const store = configureStore({
    reducer: {
        greetReducer,
    },
});

export default store;