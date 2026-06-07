import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50'>
      <div className='flex justify-between items-center p-4 md:p-5 max-w-7xl mx-auto'>
        <div className='text-2xl font-bold tracking-tight hover:scale-105 transition-transform duration-200 cursor-pointer'>
          Array Methods
        </div>
        <div className='flex gap-6 md:gap-8 lg:gap-10'>
          <Link to="/" className='hover:text-blue-200 transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-white/10'>Iteration</Link>
          <Link to="/mutator" className='hover:text-blue-200 transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-white/10'>Mutator</Link>
          <Link to="/searching" className='hover:text-blue-200 transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-white/10'>Searching</Link>
          <Link to="/accessor" className='hover:text-blue-200 transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-white/10'>Accessor</Link>
          <Link to="/nonmutating" className='hover:text-blue-200 transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-white/10'>Non-Mutating</Link>
          <Link to="/static" className='hover:text-blue-200 transition-colors duration-200 font-medium px-2 py-1 rounded-lg hover:bg-white/10'>Static Methods</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar