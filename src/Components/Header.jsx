// Header.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { cartActions } from "../store/cart";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';

const Header = () => {
  const dispatch = useDispatch();
  const cartIsOpen = useSelector(state => state.cart.isCartOpen);

  const items = useSelector(state => state.cart.items)

  const handleCartToggle = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-y-3 py-3">
      <div className="flex items-center">
        <Link to="/" className="text-4xl font-bold tracking-widest text-gray-900">ChicHaven</Link>
      </div>
      <div className="flex items-center gap-3">
        <Link to="/categories" className="text-gray-800 hover:text-gray-900 font-semibold">Categories</Link>
        <Link to="/productspage" className="text-gray-800 hover:text-gray-900 font-semibold">Product Page</Link>
        {items.length === 0 ? (
          <button onClick={handleCartToggle} className="text-gray-800 hover:text-gray-900">
            <FaShoppingCart className="text-xl" />
          </button>
        ) : (
          <div className="relative">

            <button onClick={handleCartToggle} className="text-gray-800 hover:text-gray-900">
              <span className="absolute top-[-10px] right-[-5px] bg-red-600 h-5 w-5 rounded-full flex items-center justify-center text-white text-xs">
                {items.length}
              </span>
              <FaShoppingCart className="text-xl" />
            </button>
          </div>
        )}
      </div>
      {cartIsOpen && (
        <Cart />
      )}
    </div>
  );
};

export default Header;
