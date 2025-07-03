import { createSlice } from "@reduxjs/toolkit";
import { dummyProducts } from "../../public/assets";
import { useState } from "react";


const initialState={
items: dummyProducts,
 searchQuery:'',
    
}

export const productSlice = createSlice({
  name: "products",
 
  initialState,
  reducers: {
 setSearchQuery:(state,action)=>{
  state.searchQuery = action.payload
 }
  },
});

export const {setSearchQuery} = productSlice.actions;

export default productSlice.reducer;
