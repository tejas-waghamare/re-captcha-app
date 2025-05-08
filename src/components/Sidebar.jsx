import React from 'react'

const Sidebar = () => {
  return (
    <div className='p-5 w-50 bg-gray-300 h-180'>
        
        <ul className='flex flex-col gap-10 '>
            <li className='border-2 p-2 rounded-lg bg-gray-500 hover:bg-gray-300'>Home</li>
            <li className='border-2 p-2 rounded-lg bg-gray-500 hover:bg-gray-300'>Registration</li>
            <li className='border-2 p-2 rounded-lg bg-gray-500 hover:bg-gray-300'>Login</li>
            <li className='border-2 p-2 rounded-lg bg-gray-500 hover:bg-gray-300'>About</li>
        </ul>
    </div>
  )
}

export default Sidebar