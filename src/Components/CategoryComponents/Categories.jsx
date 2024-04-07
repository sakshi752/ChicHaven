import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryTitle } from '../../store/categories';
import CardComponent from './CardComponent';

const Categories = () => {

  const dispatch = useDispatch();
  const categoryTitle = useSelector(state => state.categories.categoryTitle);

  const data = useSelector(state => state.categories.data);

  const handleCategoryClick = (title) => {
    dispatch(setCategoryTitle(title))
  }


  return (
    <div className='mt-8 md:mt-10 min-h-screen'>
      <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-xl font-semibold text-black'>{categoryTitle}</h1>
        <div className='flex gap-4'>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('All')}>
            All
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Furniture')}>
            Furniture
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Lamps')}>
            Lamps
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Plants')}>
            Plants
          </button>
          <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded' onClick={() => handleCategoryClick('Soft Toys')}>
            Soft toys
          </button>
        </div>

        {/* Grid of cards */}
        <div className='mt-4 grid sm:grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-5 px-4'>
          {data.map((card) => (
            <CardComponent key={card.key} cardKey={card.key} img={card.img} Title={card.Title} category={card.category} price={card.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories
