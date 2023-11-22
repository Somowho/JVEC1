import React from 'react'

const Contact = () => {
  return (
    <div className='w-full py-16 text-black px-4 bg-black'>
   

      <h1 className='w-full font-bold text-white md:text-5xl sm:text-4xl text-3xl pl-6 pt-1'>
        How can we be of help?</h1>  
    <p className='md:text-2xl sm:text-xl text-xs pl-6 pt-1 text-white'>please shoot us a mail</p>


    <p className='pl-6 pt-14 text-white'>Name</p>
    <input className='p-2 flex w-[400px] rounded-md pl-2 ml-4 placeholder-gray-900' type="text" placeholder='Enter Name'/>
   
   
    <p className='pl-6 pt-14 text-white'>Email</p>
    <input className='p-2 flex w-[400px] rounded-md pl-2 ml-4 placeholder-gray-900' type="text" placeholder='Enter Email'/>
   


   
    <p className='pl-6 pt-14 text-white'>Phone</p>
    <input className='p-2 flex w-[400px] rounded-md pl-2 ml-4 placeholder-gray-900' type="text" placeholder='Phone Number'/>
   
   
    
   <button className='bg-blue-900 text-[#fff] w-[400px] h-12 rounded-md  mx-auto
    mt-8 ml-4'>Submit</button>

   





    </div>
  )
}

export default Contact