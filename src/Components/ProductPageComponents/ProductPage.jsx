import React from 'react';

const ProductPage = () => {
  return (
    <div className="mt-8 md:mt-10 min-h-screen">
      <div className="flex space-x-10">
        <div className="w-1/2 rounded shadow-lg">
          <img src="public\furniture\img2.jpg" alt="Product" className="w-full" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Title</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, placeat.</p>
          <div className="flex items-center">
            <button className="font-bold text-white bg-red-500 py-2 px-4 rounded mr-2">-</button>
            <span className="px-4 py-2 bg-gray-200 rounded">0</span>
            <button className="font-bold text-white bg-green-500 py-2 px-4 rounded ml-2">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
