import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex  flex-col items-center mt-10 gap-2 responsivewidth'>
      <h1 className='text-xl md:text-3xl font-bold text-gray-700'>Never Miss a Deal!</h1>
      <p className='text-md md:text-xl font-meduim text-gray-500'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
      <div className='border border-gray-300 max-w-2xl w-full flex rounded-lg mt-8'>
        <input type="text" placeholder='Enter your email id' className=' w-full px-3 text-gray-500 outline-0' />
        <button className='bg-green-500 py-3 px-3 text-white rounded-r-lg cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
