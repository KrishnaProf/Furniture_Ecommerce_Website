import React from 'react'
import { FaRegHeart, FaRegEye } from "react-icons/fa";

const ProductCards = ({name, price, images}) => {

  return (
    <div className='w-80 group cursor-pointer'>
        <div className='relative overflow-hidden'>
            <img src={images[0]} alt={name} />
            <div className='absolute -bottom-20 group-hover:bottom-2 transition-all duration-500 ease-in-out w-full'>
            <button className='w-11/12 block mx-auto bg-lime-200 transition-all duration-200 ease-linear hover:bg-lime-400 py-2'>Add to Cart</button>
            
            </div>
            <div className='p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3'>
            <button className='bg-lime-200 p-3 hover:bg-lime-400 transition-all duration-200 ease-linear rounded-full '><FaRegHeart /></button>
            <button className='bg-lime-200 p-3 hover:bg-lime-400 transition-all duration-200 ease-linear rounded-full '><FaRegEye/></button>

            </div>
        </div>
        <div className='py-3'>
            <div className='flex justify-between items-center'>
            <h1 className='font-bold'>{name}</h1>
            <h4 className='font-bold text-lime-500'>{price}</h4>
            </div>
        </div>
        
        
    </div>
  )
}

export default ProductCards