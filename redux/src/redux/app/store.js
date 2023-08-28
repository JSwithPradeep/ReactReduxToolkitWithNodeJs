import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/Cardslice";

//create store

export const store = configureStore({
    reducer:{
       allCart:CartSlice 
    }
})