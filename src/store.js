import { configureStore } from "@reduxjs/toolkit";
import mySlice from "../src/features/slice.js"

export const store = configureStore({
    reducer:{
        auth: mySlice
    }
})