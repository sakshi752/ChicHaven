import React from 'react'

const CardComponent = ({cardKey,img,Title,category,price}) => {
    return (
        <div  className="max-w-sm rounded overflow-hidden shadow-md bg-white cursor-pointer ">
            <img className="w-full   max-h-[350px] h-[250px]" src={img} alt={Title} />

            <div className='px-6 py-4'>
                <h1 className="font-bold text-xl mb-2 text-gray-800">{Title}</h1>

                <span className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700">
                    Category: {category}
                </span>

                <div className='flex items-center
                 justify-between mt-5'>
                    <span className='text-xl font-semibold'>${price}</span>
                    <div className='flex gap-2'>
                        <button className='inline-block bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded'>
                            Add
                        </button>
                        <button className='inline-block bg-gray-900 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded'>
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent
