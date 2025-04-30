import { configureStore } from "@reduxjs/toolkit";
import mySlice from "../src/features/slice.js"
import  productSlice  from "./features/productsSlice.js";

export const store = configureStore({
    reducer:{
        auth: mySlice,
        products: productSlice,
    }
})