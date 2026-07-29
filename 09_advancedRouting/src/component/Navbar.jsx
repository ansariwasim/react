import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between  items-center bg-cyan-800 px-10 py-7 '>
         <div>
           <h2 className='text-2xl font-bold'>WASIM</h2>
         </div>
         <div className='flex gap-5'>
              <Link className='text-xl font-bold' to="/">Home</Link>
              <Link className='text-xl font-bold' to="/about">About</Link>
              <Link className='text-xl font-bold' to="/course">Course</Link>
              <Link className='text-xl font-bold' to="/product">Product</Link>
 </div>

    </div>
  )
}

export default Navbar