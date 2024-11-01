import React, {useState} from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { FaRegTrashCan } from "react-icons/fa6";
import { removefromCart } from '../redux/Slices/CartSlice';

const CartOffset = () => {

    const [open, setOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch();
    const handleRemoveItem = (id) => {
        dispatch(removefromCart(id))
    }
    
  return (
    <div>
        <button onClick={() => {setOpen(true)}} className='bg-lime-100 h-10 w-10 cursor-pointer flex justify-center items-center relative rounded-full hover:bg-lime-300 transition-all duration-300 ease-linear'>
            <span className='bg-red-500 text-white text-xs absolute top-0 -right-2 h-4 w-4 rounded-full flex items-center justify-center'>
                { cartItems ? cartItems.length : null}
            </span>
        <RiShoppingCartLine />
        </button>
        <div className={`w-full fixed top-0 right-0 h-screen ${open ? 'block' : 'hidden' } max-h-screen z-50`}>
            
            <div className={`bg-white z-[100] ${open ? 'translate-x-0' : 'translate-x-full'} w-full max-w-sm h-full ml-auto relative`}>
                <div className='w-full flex justify-between items-center px-3 py-2'>
                    <div className='w-11/12'>
                        <h1 className='font-bold'>Your Cart</h1>
                    </div>
                    <div className='w-1/12'>
                        <button onClick={() => {setOpen(false)}}>
                            <IoCloseSharp />
                        </button>
                    </div>
                </div>
                <div className='w-full p-3'>
                    <ul>
                       
                              {cartItems ? cartItems.map(item => (

                                <li key={item.id} className='bg-gray-50 cursor-pointer my-3 flex items-center justify-center gap-4 py-2'>
                                    <div className='w-24 h-24 overflow-hidden'>
                                        <img src={item.image} alt={item.name} className='w-full h-full object-cover'/>

                                    </div>
                                    <div>
                                        <h1 className='font-bold text-lg'>{item.name}</h1>
                                        <h4 className='text-lime-400 '>{item.price}</h4>

                                    </div>
                                    <div>
                                        <button onClick = {() => handleRemoveItem(item.id)} className='text-red-500 group-hover:opacity-100'>
                                            <FaRegTrashCan />
                                        </button>
                                    </div>

                                </li>

                              )

                            ) : null}

                        
                    </ul>
                </div>

            </div>
            <div className={`w-full h-full z-[60] fixed top-0 ${open ? 'translate-x-0' : 'translate-x-full'} bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 ml-auto `}>

            </div>

        </div>
    </div>
  )
}

export default CartOffset
