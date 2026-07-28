
import React from 'react'
import {Link} from 'react-router-dom'


function Navbar() {
  return (
    <>
          <div className='flex justify-between p-4 bg-blue-400 text-white'>
            <div>
               <h1>LOGO WA</h1>
            </div>
            <div>
               <ul className='flex gap-x-4'>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to= '/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/service'>Service</Link></li>
               </ul>
            </div>
          </div>
    </>
  )
}

export default Navbar;