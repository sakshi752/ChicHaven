import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from "../store/cart";

const CartItem = ({ cartId, img, price, title }) => {
    const dispatch = useDispatch();

    // Fetch count for this item from Redux store
    const item = useSelector(state => state.cart.items.find(item => item.key === cartId));
    const count = item ? item.count : 0;

    const removeItem = () => {
        dispatch(cartActions.removeFromCart(cartId));
    };

    const incrementItem = () => {
        dispatch(cartActions.incrementItem(cartId));
    };

    const decrementItem = () => {
        dispatch(cartActions.decrementItem(cartId));
    };

    return (
        <div className="px-2 py-4 flex gap-5">
            <div className='flex items-center'>
                <img src={img} alt={title} className='h-20 w-20 rounded' />
            </div>
            <div className='flex flex-col flex-grow'>
                <div className='flex justify-between'>
                    <span className='text-xl font-semibold'>{title}</span>
                    <span>${price}</span>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <div className='flex items-center'>
                        <button className='font-bold text-white bg-red-500 py-1 px-2 rounded' onClick={decrementItem}>-</button>
                        <span className='px-2 py-1'>{count}</span>
                        <button className='font-bold text-white bg-green-500 py-1 px-2 rounded' onClick={incrementItem}>+</button>
                    </div>
                    <button onClick={removeItem} className='text-black'>
                        <AiOutlineDelete />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
