import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
const CartItem = ({img,price,title}) => {

  return (
    <div className=" px-5 py-4 flex gap-5 ">
    <div className='flex items-center'>
        <img src={img} alt={title} className='h-20 w-20 rounded' />
    </div>
    <div className='flex flex-col flex-grow'>
        <div className='flex justify-between'>
            <span className='text-xl font-semibold'>{title}</span>
            <span>${price}</span>
        </div>
        <div className='flex justify-between items-center mt-2'>
            <div className='flex items-center'>
                <button className='font-bold text-white bg-red-500 py-1 px-2 rounded'>-</button>
                <span className='px-2 py-1'>0</span>
                <button className='font-bold text-white bg-green-500 py-1 px-2 rounded'>+</button>
            </div>
            <button>
            <AiOutlineDelete /> 
            </button> 
        </div>
    </div>
</div>
  )
}

export default CartItem
