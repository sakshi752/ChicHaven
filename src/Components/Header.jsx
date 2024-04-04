import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { cartActions } from "../store/cart";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FaTimes } from 'react-icons/fa';
import Cart from './Cart';

const Header = () => {

  const dispatch = useDispatch();
  // Accessing the cart state slice correctly
  const cartIsOpen = useSelector(state => state.cart.isCartOpen);


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
        <button onClick={handleCartToggle}>
          <FaShoppingCart className='text-xl' />
        </button>
      </div>
      {cartIsOpen && (
        <Cart />
      )}
    </div>
  );
};

export default Header;
