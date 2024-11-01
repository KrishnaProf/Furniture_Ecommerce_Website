import React from 'react'
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { addtoCart } from '../redux/Slices/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addtoWishList } from '../redux/Slices/WishlistSlice';

const ProductCards = (products) => {

  const dispatch = useDispatch();
  const product = products.product

  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);

  const isInCart = cartItems.some(item => item.id === product.id)
  const isInWishlist = wishlistItems.some(item => item.id === product.id)

  const handleAddtoCart = () => {
    if(!isInCart){
      dispatch(addtoCart(product))

    }
    

  }


  const handleAddtoWishlist = () => {
    if(!isInWishlist){
      dispatch(addtoWishList(product))

    }
    
  }

  return (
    <div className='w-80 group cursor-pointer'>
        <div className='relative overflow-hidden'>
            <img src={product && product.images[0]} alt={product && product.name} />
            <div className='absolute -bottom-20 group-hover:bottom-2 transition-all duration-500 ease-in-out w-full'>
            <button onClick={handleAddtoCart} className={`w-11/12 block mx-auto ${isInCart ? 'bg-gray-200 hover:bg-gray-400 transition-all duration-200 ease-linear py-2' : 'bg-lime-200 transition-all duration-200 ease-linear hover:bg-lime-400 py-2'} `}>{isInCart ? 'Items in Cart' : 'Add to Cart'}</button>
            
            </div>
            <div className='p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3'>
            <button onClick={handleAddtoWishlist} className={` ${isInWishlist ? 'bg-red-200 p-3 hover:bg-red-400 transition-all duration-200 ease-linear rounded-full ' : 'bg-lime-200 p-3 hover:bg-lime-400 transition-all duration-200 ease-linear rounded-full '}`}><FaRegHeart /></button>
            <button className='bg-lime-200 p-3 hover:bg-lime-400 transition-all duration-200 ease-linear rounded-full '><FaRegEye/></button>

            </div>
        </div>
        <div className='py-3'>
            <div className='flex justify-between items-center'>
            <h1 className='font-bold'>{product && product.name}</h1>
            <h4 className='font-bold text-lime-500'>$ {product && product.price}</h4>
            </div>
        </div>
        
        
    </div>
  )
}

export default ProductCards