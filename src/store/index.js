import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import categoriesSlice from "./categories";
const  cartStore=configureStore(
    {
        reducer:{
            cart:cartSlice.reducer,
            categories:categoriesSlice.reducer
        }
    }
)

export default cartStore;
