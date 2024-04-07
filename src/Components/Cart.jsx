import React, { useEffect } from 'react';
import { cartActions } from "../store/cart";
import { useDispatch, useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import CartItem from './CartItem';

const Cart = () => {
    const dispatch = useDispatch();

    // toggle cart
    const handleCartToggle = () => {
        dispatch(cartActions.toggleCart());
    };

    // clear cart
    const clearCart = () => {
        dispatch(cartActions.clearCart())
    }

    // dummy data
    const cartData = useSelector(state => state.cart.items);

    // total
    const total = useSelector(state => state.cart.totalAmt);

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950 bg-opacity-50 z-10">
            <div className='bg-white shadow-lg rounded w-[60vh] mx-3 overflow-y-auto max-h-[57vh] '>
                {/* toggle for closing cart */}
                <div className='flex justify-between px-4 py-2'>
                    <h1 className='text-center  text-2xl font-bold'>your products</h1>
                    <button
                        className=' py-2 items-end text-gray-950'
                        onClick={handleCartToggle}>
                        <FaTimes />
                    </button>
                </div>

                {cartData.length === 0 ? <h1 className='text-center my-9 text-xl font-bold'>cart is empty</h1> :
                    (<div className='flex flex-col  mb-2'>

                        <div className='mt-2'>
                            {cartData.map((data) => <CartItem key={data.key} cartId={data.key} img={data.img} title={data.Title} totalPrice={data.totalPrice} />)}
                        </div>
                        <div className='flex justify-between items-center p-3'>
                            <h1 className='text-xl font-bold'>Total price</h1>
                            <h1 className='text-lg font-semibold'>${total}</h1>
                        </div>

                        <button
                            className=' p-3 mt-5 bg-gray-900 text-white rounded text-md font-semibold  mx-auto'
                            onClick={clearCart}
                            >Clear cart</button>
                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default Cart;
