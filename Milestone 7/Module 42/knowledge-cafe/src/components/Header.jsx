import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between mt-12 mb-12'>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>

        <img className='w-14 h-14 rounded-full' src="https://randomuser.me/api/portraits/women/17.jpg" alt="" />
    </div>
  )
}

export default Header
