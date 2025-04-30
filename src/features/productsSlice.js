import { createSlice } from "@reduxjs/toolkit";
import { dummyProducts } from "../../public/assets";


const initialState={
items: dummyProducts
    
}
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
 
  },
});



export default productSlice.reducer;
