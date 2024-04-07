// Header.js
import React, { useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { cartActions } from "../store/cart";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
useEffect

const Header = () => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector(state => state.cart.isCartOpen);
// cart data
  const cartData = useSelector(state => state.cart.items)
// toggle cart
  const handleCartToggle = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-y-3 py-3">
      <div className="flex items-center">
        {/* logo */}
        <Link to="/" className="text-4xl font-bold tracking-widest text-gray-900">ChicHaven</Link>
      </div>
      <div className="flex items-center gap-3">
        {/* navbar links */}
        <Link to="/categories" className="text-gray-800 hover:text-gray-900 font-semibold">Categories</Link>
        <Link to="/productspage" className="text-gray-800 hover:text-gray-900 font-semibold">Product Page</Link>
        
        {/* condition for cart icon to show total no of items */}
        {/* handleCartToggle method is used to toggle the Cart Component */}
        {cartData.length === 0 ? (
          <button onClick={handleCartToggle} className="text-gray-800 hover:text-gray-900">
            <FaShoppingCart className="text-xl" />
          </button>
        ) : (
          <div className="relative">
            <button onClick={handleCartToggle} className="text-gray-800 hover:text-gray-900">
              <span className="absolute top-[-10px] right-[-5px] bg-red-600 h-5 w-5 rounded-full flex items-center justify-center text-white text-xs">
                {cartData.length}
              </span>
              <FaShoppingCart className="text-xl" />
            </button>
          </div>
        )}
      </div>

      {/* is toggle = true then Cart component is visible */}
      {cartIsOpen && (
        <Cart />
      )}
    </div>
  );
};

export default Header;
