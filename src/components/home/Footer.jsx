import React from 'react'
import {FaFacebook } from "react-icons/fa";
import {FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <>
    <div className='w-full h-full flex items-center justify-center bg-gray-100 gap-3 px-3'>
        <div className='col flex-1'>
            <h1 className='logo font-bold text-2xl'>
                Furniture
            </h1>
            <p className='text-sm text-gray-500 italic py-3'>This is the footer of the furniture ecommoerce website sdds asfsadsav efsdsx wcascd sdvsd v v evessa  ecvas  svsadz evwacz vevsdc sdfce ecdsz cc ecads acaescacsz ds c vsres.</p>

        </div>
        <div className='col flex-1'>
            <h1 className='font-bold title py-2'>Quick Links</h1>
            <ul className='flex flex-col gap-3 w-fit'>
                <li className='font-bold hover:text-lime-400 cursor-pointer'>Home</li>
                <li className='font-bold hover:text-lime-400 cursor-pointer'>About</li>
                <li className='font-bold hover:text-lime-400 cursor-pointer'>Contacts</li>
                <li className='font-bold hover:text-lime-400 cursor-pointer'>Shop</li>
            </ul>
        </div>
        <div className='col flex-1'>
            <h1 className='font-bold title py-2'>Terms & Conditions</h1>
            <ul className='flex flex-col gap-3 w-fit'>
                <li className='font-bold hover:text-lime-400 cursor-pointer'>Privacy policy</li>
                <li className='font-bold hover:text-lime-400 cursor-pointer'>Terms of Use</li>
                
            </ul>
        </div>
        <div className='col flex-1'>
            <h1 className='font-bold title py-2'>Social Links</h1>
            <ul className='flex gap-3 text-2xl w-fit'>
                <li className='font-bold hover:text-lime-400 cursor-pointer'><FaFacebook /></li>
                <li className='font-bold hover:text-lime-400 cursor-pointer'><FaSquareInstagram /></li>
                <li className='font-bold hover:text-lime-400 cursor-pointer'><FaSquareXTwitter /></li>
            </ul>
        </div>
    </div>
    <div className='bg-gray-100 border-t border-gray-600 solid flex items-center justify-between py-1 mx-auto'>
        
            <p className=' flex text-sm text-gray-500 italic py-3 font-bold'><LiaCopyrightSolid className='w-5 h-5'/> All rights reserved Furniture 2024.</p>

            <img src='./img/card.png' alt="card" className='w-full h-full max-w-[200px]'/>
        
    </div>
    </>
  )
}

export default Footer