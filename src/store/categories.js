import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice=createSlice({
    name:"categories",
    initialState: {
        categoryTitle: "All",
    },
    reducers:{
      setCategoryTitle(state,action){
        state.categoryTitle=action.payload;
      }
    }
})

export const {setCategoryTitle} = categoriesSlice.actions;
export default categoriesSlice;