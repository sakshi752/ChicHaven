import React from 'react';
import { cartActions } from "../store/cart";
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch();

    const handleCartToggle = () => {
        dispatch(cartActions.toggleCart());
    };

    // dummy data
    const dummyData = [
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

    ];

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className='bg-white shadow-lg rounded w-[60vh] mx-3 overflow-y-auto max-h-[70vh] relative'>
                <button
                    className='px-4 py-2 items-end absolute right-0 top-2 text-gray-950'
                    onClick={handleCartToggle}>
                    <FaTimes />
                </button>
                <div className='mt-9'>
                    {dummyData.map((data) => <CartItem key={data.key} img={data.img} title={data.Title} price={data.price}/>)}
                </div>
            </div>
        </div>
    );
};

export default Cart;
