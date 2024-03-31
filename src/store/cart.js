import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isCartOpen: false,
        items: []
    },
    reducers: {
        toggleCart(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        addToCart(state, action) {
            console.log('added to cart');
        },
        removeFromCart(state, action) {
            console.log('remove from cart');
        },
        clearCart(state) {
            console.log('clear cart');
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
