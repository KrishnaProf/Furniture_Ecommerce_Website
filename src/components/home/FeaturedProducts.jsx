import React, { useEffect, useState } from 'react'
import ProductCards from '../ProductCards'
import {FaArrowRightLong} from "react-icons/fa6";

const FeaturedProducts = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./img/Products/products.json')
        .then(response => response.json())
        .then(data => setData(data.products))
        .catch(error => console.log('Error:' ,error))

    },[])
  return (
    <>
    <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-3 gap-1'>

        {data.length > 0 && data.slice(0,8).map((product) => (
            <div key={product.id} className='w-1/4'>
            <ProductCards product={product}/>
            </div>

        ))}

        
        
    </div>
    <div className='flex w-full justify-center'>
        <button className='flex items-center justify-center hover:text-lime-400 transition-all duration-500 ease-linear gap-2 mx-auto font-bold'>View More <FaArrowRightLong /> </button>
    </div>
    </>
  )
}

export default FeaturedProducts