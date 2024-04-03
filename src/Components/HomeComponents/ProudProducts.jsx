import React from 'react';
import { useSelector } from 'react-redux';
import CardComponent from '../CardComponent';

const ProudProducts = () => {
  const data = useSelector(state => state.categories.data);

  const getRandomIndices = (max, count) => {
    const indices = [];
    while (indices.length < count) {
      const randIndex = Math.floor(Math.random() * max)
      if (!indices.includes(randIndex)) {
        indices.push(randIndex);
      }
    }
    return indices; // Return the array of indices
  }

  const randomIndices = getRandomIndices(data.length, 4);

  const randomProduct = randomIndices.map((index) => data[index]);
  return (
    <div className='mt-10'>
      <h1 className='text-xl font-semibold text-gray-900'>Products we are proud of</h1>
      <div className='flex gap-5'>
        {randomProduct.map((card) => (
          <CardComponent key={card.key} cardKey={card.key} img={card.img} Title={card.Title} category={card.category} price={card.price} />
        ))}
      </div>
    </div>
  )
}

export default ProudProducts;
