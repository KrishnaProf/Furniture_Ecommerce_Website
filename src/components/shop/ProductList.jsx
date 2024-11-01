import React, { useEffect, useState } from 'react'
import ProductCards from '../ProductCards'
import SortDropdown from './SortDropdown'

const ProductList = () => {

    const [initialData, setInitialData] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./img/Products/products.json')
        .then(response => response.json())
        .then(data => {setData(data.products); setInitialData(data.products)})
        .catch(error => console.log('Error:' ,error))

    },[])


  return (
    <>
    <div className='flex justify-end items-center w-full'>
    <SortDropdown products = {initialData} SortedData={setData}/>
    </div>
    <div className='w-full grid grid-cols-4  py-3 px-3 '>
        

        {data.length > 0 && data.map((product) => (
            
            <div key={product.id}>
            <ProductCards product={product} />
            </div>

        ))}

    </div>
    </>
    
  )
}

export default ProductList