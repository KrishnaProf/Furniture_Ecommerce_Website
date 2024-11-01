import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full h-full bg-gray-200 flex items-center justify-center py-14 px-2'>
        <div className='max-w-md w-full'>
            <h1 className='py-5 font-bold text-3xl'>Subscribe for Exclusive Updates</h1>
            <div className='flex w-full'>
                <input type='email' name='newsletteremail' id='newsletteremail' placeholder='Enter your email' className='w-full border focus:outline-none focus:border-gray-400 p-2 border-gray-400 h-10'/>
                <button className='bg-black hover:bg-slate-900 transition-all duration-300 ease-in text-white px-5'>Save</button>
            </div>

        </div>
    </div>
  )
}

export default NewsLetter