import React from 'react'

const OfferBanners = () => {
  return (
    <div className='w-full h-full flex items-center justify-center gap-3'>
        <div className='flex-1 relative'>
        <div>
            <img src='./img/Hero_banner/01.jpg' alt='banner' className='w-full h-full '/>

        </div>

        <div className='absolute bottom-4 p-5'>
            <h1 className=' text-3xl font-semibold'>Exclusive Deal:</h1>
            <h1 className='text-4xl font-bold'>Save Big on Stylish Chair</h1>

        </div>

        </div>
        <div className='flex-1 relative'>
        <div>
            <img src='./img/Hero_banner/04.jpg' alt='banner' className='w-full h-full '/>

        </div>
        <div className='absolute top-4 p-5'>
            <h1 className=' text-3xl font-semibold'>Limited Time Offer:</h1>
            <h1 className=' text-5xl font-bold'>Get cozy with Discounted Sofas!</h1>
        </div>

        </div>
        
    </div>
  )
}

export default OfferBanners