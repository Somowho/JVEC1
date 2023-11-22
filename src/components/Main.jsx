import React from 'react'
import Typed from 'react-typed';
const Main = () => {
  return (
    <div className='text-black'>

    <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

    <p className='text-blue-100 font-bold p-2'>CREATIVITY LIVES HERE</p>
    <h1 className='md:text-7xl sm:text-6xl text-4l font-bold md: py-6 text-white'>First-class ICT Consultant</h1>
    {/*py-6 means padding-top & padding-bottom = 24px */}

    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 text-white '>Value, creativity, consistency for</p>
      {/*py-4 means padding-top & padding-bottom = 16px */}

    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-white ' strings={['YOU', 'US', 'THEM']
} typeSpeed={120} backSpeed={140} loop/>
      {/*pl-2 means padding on the left */}


    <p className='md:text-2xl text-xl font-bold text-blue-200'>We are your reliable partner, we take your business to its peak.</p>  
    <button className='bg-black w-[200px] rounded-md  my-6 mx-auto py-3 text-white font-bold'>
        Click Here</button>
    </div>
    </div>
  )
}

export default Main