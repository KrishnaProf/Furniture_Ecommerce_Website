import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashCan } from "react-icons/fa6";
import { removefromCart } from '../redux/Slices/CartSlice';

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items)

  const TotalQuantity = useSelector((state) => state.cart.totalQuantity)
  const TotalAmount = useSelector((state) => state.cart.totalAmount)

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removefromCart(id))
  }

  return (
    <div className='w-full h-full py-5 flex-col flex items-center justify-center border-t-2'>
      <h1 className='text-center text-xl font-bold py-3'>My Cart</h1>
      <div className='w-11/12 py-3 min-h-[50vh] '>
        <table className='w-full h-full'>
          <thead className='bg-gray-300 '>
            <tr className='font-bold'>
              <th className='py-3'>ID</th>
              <th className='py-3'>Name</th>
              <th className='py-3'>Quantity</th>
              <th className='py-3'>Price</th>
              <th className='py-3'>Action</th>
            </tr>
          </thead>
          <tbody className='bg-white '>
            {cartItems.length > 0 ? (cartItems.map((item) => (
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
                          The Cart is Empty
                        </td>
                      </tr>
                    )
                    }
          

          </tbody>
          <tfoot className='bg-gray-50 w-full'>
            <tr className='w-full'>
              <td className='p-3 font-bold' colSpan={2}> Total Quantity : {TotalQuantity}</td>
              <td className='p-3 font-bold text-right' colSpan={3}> Total Price : $ {TotalAmount}</td>
            </tr>
          </tfoot>
        </table>

      </div>
    </div>
  )
}

export default Cart