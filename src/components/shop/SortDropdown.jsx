import React, { useState } from 'react'
import { useEffect } from 'react';

const SortDropdown = ({products, SortedData}) => {

    const [SortDropdown, setSortDropdown] = useState('')

    const handleSortChange = (e) => {

        const value = e.target.value;
        setSortDropdown(value);
        
    };
  
    useEffect(() => {
        let sortedProducts = [...products];

    switch (SortDropdown) {
        case "priceasc":
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case "pricedesc":
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case "nameasc":
            sortedProducts.sort((a,b) => a.name.localeCompare(b.name));
            break;
        case "namedesc":
            sortedProducts.sort((a,b) => b.name.localeCompare(a.name));
            break;
        default:
            break;

    }

    SortedData(sortedProducts);

    },[SortDropdown, SortedData])
    

  return (
    <div>
        <select id="SortDropdown" className='focus-outline-none border border-gray-200 py-2 px-3 rounded-md bg-white' name={SortDropdown} onChange={handleSortChange}>
            <option value="">Select...</option>
            <option value="priceasc">Price: low to high</option>
            <option value="pricedesc">Price: high to low</option>
            <option value="nameasc">Name: A to Z</option>
            <option value="namedesc">Name: Z to A</option>

        </select>
    </div>
  )
}

export default SortDropdown