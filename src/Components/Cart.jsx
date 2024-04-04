import React from 'react';
import { cartActions } from "../store/cart";
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
    const dispatch = useDispatch();

    const handleCartToggle = () => {
        dispatch(cartActions.toggleCart());
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded shadow-lg flex gap-4 w-[50vh] mx-3">
                <div className='flex items-center'>
                    <img src="public\furniture\img5.jpg" alt="" className='h-20 w-20 rounded' />
                </div>
                <div className='flex flex-col flex-grow'>
                    <div className='flex justify-between'>
                        <span className='text-xl font-semibold'>Title</span>
                        <span>$100</span>
                    </div>
                    <div className='flex justify-between items-center mt-2'>
                        <div className='flex items-center'>
                            <button className='font-bold text-white bg-red-500 py-1 px-2 rounded'>-</button>
                            <span className='text-lg'>0</span>
                            <button className='font-bold text-white bg-green-500 py-1 px-2 rounded'>+</button>
                        </div>
                        <button onClick={handleCartToggle}>
                            <FaTimes />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
