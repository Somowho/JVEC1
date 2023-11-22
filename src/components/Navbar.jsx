import React from 'react'
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
    const [nav, setNav] = useState(false);


const handleNav = () => {
setNav(!nav);

}


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'> 
    {/*h-24 means height = 96px */}

    <h1 className='w-full text-3xl font-bold text-white'>JVEC</h1>

    <ul className='hidden md:flex text-white'>

    <li className='p-4'>Home</li> {/*p-4 means padding = 16px*/}
    <li className='p-4'>About</li>
    <li className='p-4'>Services</li>
    <li className='p-4'>Training</li>
    </ul>




    <div onClick={handleNav} className='block bg-white  md:hidden'>
    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>






{/*Mobile version */}


<ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-900 bg-white ease-in-out duration-500' : 'ease-in-out durtion-500 fixed left-[-100%]'}>

<h1 className='w-full text-3xl font-bold text-blue-500'>JVEC</h1>


<li className='p-4 border-b border-blue-500'>Home</li>

<li className='p-4 border-b border-blue-500'>About</li>

<li className='p-4 border-b border-blue-500'>Services</li>


<li className='p-4 border-b border-blue-500'>Training</li>
</ul>

    </div>
  )
}

export default Navbar