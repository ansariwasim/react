import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { themDataContext } from '../context/ThemContext'


function Navbar(props) {

 const data =  useContext(themDataContext)

  return (
      <>
      <div className='flex justify-between items-center py-4 px-5 bg-green-900 text-white'>
        <h1 className='text-3xl font-semibold'>{data}</h1>
        <Navbar2  />
      </div>
      

      
      </>

  )
}

export default Navbar