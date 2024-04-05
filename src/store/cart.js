import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isCartOpen: false,
        items: [
            // {
            //     key: 1,
            //     img: "public/furniture/img1.webp",
            //     Title: "Wood Finish Table",
            //     category: "furniture",
            //     desc: "",
            //     price: 150,
            //     count: 1,
            //     totalPrice: 150
            // },
            // {
            //     key: 2,
            //     img: "public/plants/img1.jpg",
            //     Title: "Areca Palm Plant",
            //     category: "plants",
            //     desc: "",
            //     price: 70,
            //     count: 1,
            //     totalPrice: 70
            // },
            // {
            //     key: 3,
            //     img: "public/softToys/img1.jpg",
            //     Title: "Reversible Plushie Octopus",
            //     category: "soft toys",
            //     desc: "",
            //     price: 25,
            //     count: 1,
            //     totalPrice: 25
            // },
            // {
            //     key: 4,
            //     img: "public/lamps/img1.avif",
            //     Title: "Table lamp",
            //     category: "lamps",
            //     desc: "",
            //     price: 45,
            //     count: 1,
            //     totalPrice: 45
            // },
            // {
            //     key: 5,
            //     img: "public/furniture/img2.jpg",
            //     Title: "Wall Shelf",
            //     category: "furniture",
            //     desc: "",
            //     price: 90,
            //     count: 1,
            //     totalPrice: 90
            // },
            // {
            //     key: 6,
            //     img: "public/plants/img2.jpg",
            //     Title: "Bambino Natural",
            //     category: "plants",
            //     desc: "",
            //     price: 60,
            //     count: 1,
            //     totalPrice: 60
            // },
            // {
            //     key: 7,
            //     img: "public/softToys/img2.webp",
            //     Title: "Unicorn",
            //     category: "soft toys",
            //     desc: "",
            //     price: 35,
            //     count: 1,
            //     totalPrice: 35
            // }
        ],
        totalAmt: 0,
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
                alert('Item is already in the cart.');
            }
            console.log(action.payload);
        },
        removeFromCart(state, action) {
            const cartItemId = action.payload;
            state.items = state.items.filter(item => item.key !== cartItemId);
            state.totalAmt = state.items.reduce((total, item) => total + item.totalPrice, 0);
        },
        incrementItem(state, action) {
            const cartItemId = action.payload;
            const item = state.items.find(item => item.key === cartItemId);
            if (item) {
                item.count += 1;
                item.totalPrice = item.count * item.price;
                state.totalAmt = state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
        },
        decrementItem(state, action) {
            const cartItemId = action.payload;
            const item = state.items.find(item => item.key === cartItemId);
            if (item && item.count > 1) {
                item.count -= 1;
                item.totalPrice = item.count * item.price;
                state.totalAmt = state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
            else {
                state.items = state.items.filter((item) => item.key !== cartItemId);
                state.totalAmt = state.items.reduce((total, item) => total + item.totalPrice, 0);
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalAmt = 0; // Reset totalAmt when clearing the cart
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
