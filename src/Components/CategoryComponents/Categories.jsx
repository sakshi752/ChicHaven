import React from 'react'

const Categories = () => {
  return (
    <div className='mt-8 md:mt-10 min-h-screen'> 
     <div className='flex flex-col gap-3 items-center'>
      <h1 className='text-xl font-semibold'>Title</h1>
      <div className='flex gap-4'>
        <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded'>Furniture</button>
        <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded'>Lamps</button>
        <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded'>Plants</button>
        <button className='bg-gray-900 hover:bg-gray-950 text-white p-1 rounded'>Soft toys</button>
      </div>
     </div>

    </div>
  )
}

export default Categories
