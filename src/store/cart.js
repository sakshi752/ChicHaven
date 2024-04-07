import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const localCartItemsFromLocalStorage=()=>{
    try{
        const cartItems=JSON.parse(window.localStorage.getItem("cartItems"));
        if (cartItems) {
            return cartItems;
        }
    }
    catch(error){
        console.error("Error loading cart items from local storage:", error)
    }
    return [];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isCartOpen: false,
        items: localCartItemsFromLocalStorage(),
        // [
        //     {
        //         key: 1,
        //         img: "public/furniture/img1.webp",
        //         Title: "Wood Finish Table",
        //         category: "furniture",
        //         desc: "",
        //         price: 150,
        //         count: 1,
        //         totalPrice: 150
        //     },
        // ],
        totalAmt: localStorage.getItem('totalAmt'),
    },
    reducers: {
        toggleCart(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        addToCart(state, action) {
            const newItem = action.payload
            newItem.count = 1
            newItem.totalPrice = newItem.price;
            const existingItem = state.items.find(item => item.key === newItem.key);
            if (!existingItem) {
                state.items.push(newItem);
                state.totalAmt += newItem.price; // Increment totalAmt by the price of the added item
            } else {
                // alert('Item is already in the cart.');
                existingItem.count+=1;
                existingItem.totalPrice=existingItem.count*existingItem.price
                state.totalAmt=state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
            window.localStorage.setItem("cartItems", JSON.stringify(state.items));
            window.localStorage.setItem("totalAmt", JSON.stringify(state.totalAmt));

        },
        removeFromCart(state, action) {
            const cartItemId = action.payload;
            state.items = state.items.filter(item => item.key !== cartItemId);
            state.totalAmt = state.items.reduce((total, item) => total + item.totalPrice, 0);

            window.localStorage.setItem("cartItems", JSON.stringify(state.items));
            window.localStorage.setItem("totalAmt", JSON.stringify(state.totalAmt));
        },
        incrementItem(state, action) {
            const cartItemId = action.payload;
            const item = state.items.find(item => item.key === cartItemId);
            if (item) {
                item.count += 1;
                item.totalPrice = item.count * item.price;
                state.totalAmt = state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
            window.localStorage.setItem("cartItems", JSON.stringify(state.items));
            window.localStorage.setItem("totalAmt", JSON.stringify(state.totalAmt));
        },
        decrementItem(state, action) {
            const cartItemId = action.payload;
            const item = state.items.find(item => item.key === cartItemId);
            if (item && item.count > 1) {
                item.count -= 1;
                item.totalPrice = item.count * item.price;
            }
            else {
                state.items = state.items.filter((item) => item.key !== cartItemId);
                item.totalPrice = item.count * item.price;
            }
            state.totalAmt = state.items.reduce((total, item) => total + item.totalPrice, 0);
            window.localStorage.setItem("cartItems", JSON.stringify(state.items));
            window.localStorage.setItem("totalAmt", JSON.stringify(state.totalAmt));
        },
        clearCart(state) {
            state.items = [];
            state.totalAmt = 0; // Reset totalAmt when clearing the cart

             window.localStorage.setItem("cartItems", JSON.stringify(state.items));
             window.localStorage.setItem("totalAmt", JSON.stringify(state.totalAmt));
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
