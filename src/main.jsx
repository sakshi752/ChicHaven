import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/HomeComponents/Home.jsx'; // Remove duplicate import
import Categories from './Components/CategoryComponents/Categories.jsx';
import ProductPage from './Components/ProductPageComponents/ProductPage.jsx';
import { Provider } from 'react-redux';
import cartStore from './store/index.js';
import { createRoot } from 'react-dom/client';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/categories', element: <Categories /> },
      { path: '/productspage', element: <ProductPage /> },
    ],
  },
]);

// Wrap the entire application inside Provider and RouterProvider
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={cartStore}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
