import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaRegTrashCan } from "react-icons/fa6";
import { removefromWishList } from '../redux/Slices/WishlistSlice';

const WishList = () => {

  const wishlistItems = useSelector((state) => state.wishlist.items)

  
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removefromWishList(id))
  }

  return (
    <div className='w-full h-full flex items-center justify-center py-5 flex-col'>
      <h1 className='font-bold text-center text-xl py-3'>My WishList</h1>
      <div className='w-11/12 min-h-[50vh]'>
        <table className='w-full '>
          <thead className='bg-gray-300'>
            <tr>
              <th className='py-3'>ID</th>
              <th className='py-3'>Name</th>
              <th className='py-3'>Quantity</th>
              <th className='py-3'>Price</th>
              <th className='py-3'>Action</th>
            </tr>
          </thead>
          <tbody>

          {wishlistItems.length > 0 ? (wishlistItems.map((item) => (
                              <tr key={item.id} className='hover:bg-gray-100 text-center'>
                              <th className='py-3'>{item.id}</th>
                              <th className='py-3'>{item.name}</th>
                              <th className='py-3'>{item.quantity}</th>
                              <th className='py-3'>{item.price}</th>
                              <th className='py-3'><div>
                                        <button onClick = {() => handleRemoveItem(item.id)} className='text-red-500 group-hover:opacity-100'>
                                            <FaRegTrashCan />
                                        </button>
                                    </div></th>
                              </tr>

                    ))

                    )
                    : 
                    ( 
                      <tr className='hover:bg-gray-100 text-center'>
                        <td colSpan={5} className='py-3'>
                          The WishList is Empty
                        </td>
                      </tr>
                    )
                    }

            
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default WishList