import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isCartOpen: false,
        items: [
            {
                key: 1,
                img: "public/furniture/img1.webp",
                Title: "Wood Finish Table",
                category: "furniture",
                desc: "",
                price: 150,
                count: 0
            },
            {
                key: 2,
                img: "public/plants/img1.jpg",
                Title: "Areca Palm Plant",
                category: "plants",
                desc: "",
                price: 70,
                count: 0
            },
            {
                key: 3,
                img: "public/softToys/img1.jpg",
                Title: "Reversible Plushie Octopus",
                category: "soft toys",
                desc: "",
                price: 25,
                count: 0
            },
            {
                key: 4,
                img: "public/lamps/img1.avif",
                Title: "Table lamp",
                category: "lamps",
                desc: "",
                price: 45,
                count: 0
            },
            {
                key: 5,
                img: "public/furniture/img2.jpg",
                Title: "Wall Shelf",
                category: "furniture",
                desc: "",
                price: 90,
                count: 0
            },
            {
                key: 6,
                img: "public/plants/img2.jpg",
                Title: "Bambino Natural",
                category: "plants",
                desc: "",
                price: 60,
                count: 0
            },
            {
                key: 7,
                img: "public/softToys/img2.webp",
                Title: "Unicorn",
                category: "soft toys",
                desc: "",
                price: 35,
                count: 0
            }
        ]
    },
    reducers: {
        toggleCart(state) {
            state.isCartOpen = !state.isCartOpen;
        },
        addToCart(state, action) {
            console.log('added to cart');
        },
        removeFromCart(state, action) {
            const cartItemId = action.payload; // Assuming you're passing the item key as payload
            state.items = state.items.filter(item => item.key !== cartItemId)
        },
        incrementItem(state, action) {
            const cartItemId = action.payload;
            const item = state.items.find(item => item.key === cartItemId);
            if (item) {
                item.count += 1;
            }
        },
        decrementItem(state, action) {
            const cartItemId = action.payload;
            const item = state.items.find(item => item.key === cartItemId);
            if (item && item.count > 0) {
                item.count -= 1;
            }
            else{
                
            }
        },
        clearCart(state) {
            state.items = []
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
