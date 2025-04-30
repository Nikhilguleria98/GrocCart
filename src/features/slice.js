import { createSlice } from "@reduxjs/toolkit";
import { Flag } from "lucide-react";

const initialState={
    isLoggedIn: true,
    user:null,
    
}
export const mySlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state,action)=>{
        state.isLoggedIn=true
        state.user=action.payload
    },
    logout:(state)=>{
        state.isLoggedIn=false
        state.user=null
    }
  },
});

export const {login,logout} = mySlice.actions;

export default mySlice.reducer;
