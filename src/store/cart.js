import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isCartOpen: false,
        items:  [
            {
                key: 1,
                img: "public/furniture/img1.webp",
                Title: "Wood Finish Table",
                category: "furniture",
                desc: "",
                price: 150
            },
            {
                key: 2,
                img: "public/plants/img1.jpg",
                Title: "Areca Palm Plant",
                category: "plants",
                desc: "",
                price: 70
            },
            {
                key: 3,
                img: "public/softToys/img1.jpg",
                Title: "Reversible Plushie Octopus ",
                category: "soft toys",
                desc: "",
                price: 25
            },
            {
                key: 4,
                img: "public/lamps/img1.avif",
                Title: "Table lamp",
                category: "lamps",
                desc: "",
                price: 45
            },
            {
                key: 5,
                img: "public/furniture/img2.jpg",
                Title: "Wall Shelve",
                category: "furniture",
                desc: "",
                price: 90
            },
            {
                key: 6,
                img: "public/plants/img2.jpg",
                Title: "Bambino Natural",
                category: "plants",
                desc: "",
                price: 60
            },
            {
                key: 7,
                img: "public/softToys/img2.webp",
                Title: "Unicorn",
                category: "soft toys",
                desc: "",
                price: 35
            },
    
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
        clearCart(state) {
            state.items=[]
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;
