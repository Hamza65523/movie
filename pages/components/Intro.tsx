import { url } from 'inspector'
import React from 'react'
const Intro = () => {
  return (
    <div className='bg-cyan-500'>
        <div className="py-8">
           <div className="w-[95%] mt-9 mx-auto my-0">
           <h1 className='text-5xl font-bold text-white'>Welcome MV World.</h1>
            <h1 className='text-3xl font-bold text-white'>Millions of movies, TV shows and prople to discover. Explore now.</h1>
           </div>
            <div className="w-[95%] mt-9 mx-auto my-0 flex relative">
                <input type="text" className='px-4 py-2 rounded-3xl w-full' placeholder='Search for a moview, tv show, person.....' name="" id="" />
                <div className="bg-cyan-400 px-4 py-2 rounded-3xl absolute right-0">
                <input type="submit" name="" id="" className='cursor-pointer text-white font-bold' value='Submit' />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro