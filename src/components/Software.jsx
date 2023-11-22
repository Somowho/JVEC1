import React from 'react'
import Laptop from '../assets/laptop.jpg';
import Camera from '../assets/Camera2.png';
import Corporate from '../assets/Corporate.jpg'
const Software = () => {

  return (
    <div className='w-full bg-white py-16 px-4'> {/* py-16: Padding-top & padding-bottom = 64px // px-4: padding-left & padding-right: 16px*/}

    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/"/>


    <div className='flex flex-col justify-center'>
    <p className='text-blue-500 font-bold'>DATA ANALYSIS</p>
    <h1 className='md:text-4xl sm:text-3xl font-bold py-2 '>We deliver top-notch services </h1>


    <p>Our unwavering commitment to excellence empowers us to deliver impeccable services,
        consistently exceeding expectations within every deadline. Distinguished by our relentless
        pursuit of perfection, we seamlessly provide unparalled services that redefine industry 
        standards.
    </p>


    <button className='bg-blue-500 text-[#fff] w-[200px] rounded-md font-medium my-6 mx-auto
    md:mx-0 py-3 sm:fixed'>Get Started</button>

    </div>


    {/*Second section of camera is below */}



    <img className='w-[300px] mx-auto my-4' src={Camera} alt="/"/>
    

    <div className='flex flex-col justify-center'>
    <p className='text-blue-500 font-bold'>VIDEO EDITING</p>
    <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>We are committed to excellence. </h1>


    <p>We go the extra mile to give extra value for money; this is our hallmark.
    We help our cclients stand out from the crowd by giving their business a creative
    touch.
    </p>


    <button className='bg-blue-500 text-[#fff] w-[200px] rounded-md font-medium my-6 mx-auto
    md:mx-0 py-3'>Lets Begin</button>

    </div>





    <img className='w-[500px] mx-auto my-4 pt-20'  src={Corporate} alt="/"/>
    
    <div className='flex flex-col justify-center'>
    <p className='text-blue-500 font-bold'>SOFTWARE DEVELOPMENT</p>
    <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>We never compromise on quality. </h1>


    <p>We deliver outstanding software development solutions to our clients and also train people to become
        professionals in the field of technology.
    </p>


    <button className='bg-blue-500 text-[#fff] w-[200px] rounded-md font-medium my-6 mx-auto
    md:mx-0 py-3'>Explore</button>

    </div>



    </div>
    </div>
  )
}

export default Software