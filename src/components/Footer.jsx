import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-4 mt-4 flex align-center justify-center'>
      <div className='container mx-auto text-center '>
        <p>&copy; {new Date().getFullYear()} Suryansh-Library. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className='flex justify-center space-x-4 mt-2'>
          <a href="#" className='text-blue-400 hover:text-blue-600'>Facebook</a>
          <a href="#" className='text-blue-400 hover:text-blue-600'>Twitter</a>
          <a href="#" className='text-blue-400 hover:text-blue-600'>Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer