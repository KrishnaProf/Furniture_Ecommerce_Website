import React from 'react'
import { Link } from 'react-router-dom'
import CartOffset from './CartOffset'
import WishListOffset from './WishListOffset'

const Navbar = () => {

    const navItems = [
        {"label" : 'Home',
        "path" : '/'},
        {"label" : 'Shop',
        "path" : '/shop'},
        {"label" : 'Cart',
        "path" : '/cart'},
        {"label" : 'Wishlist',
        "path" : '/wishlist'},
];

  return (
    <div className='w-full flex items-center justify-center py-1'>
        <div className='w-10/12 flex justify-center px-2 py-4 items-center'>
            <div className='flex-1'>
                <h1 className='logo text-2xl font-bold'>Furniture</h1>
            </div>
            <div className='flex-1 flex justify-center items-center'>
                <ul className='flex items-center gap-4 justify-center font-bold'>
                    {navItems.map((item,index) => (
                        <li key={index}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

            </div>
            <div className='flex-1 flex text-xl gap-2 justify-end items-center'>
            <WishListOffset />
            <CartOffset />

            </div>
        </div>

    </div>
  )
}

export default Navbar