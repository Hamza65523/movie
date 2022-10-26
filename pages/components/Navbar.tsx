import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faSearch} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='bg-[#032541]'>
        <div className=" flex justify-between w-[95%] mx-auto my-0 px-4 items-center">
            <div className="flex text-white gap-6 py-4 ">
                <div className="relative">
                    <span  className='cursor-pointer text-xl after:w-12 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-500 after:-right-3 after:rounded-lg after:absolute after:top-[7px] after:h-4 pr-10'>MV World</span>
                </div>
                <ul className='flex gap-2'>
                    <li className='cursor-pointer font-bold text-lg'>Movies</li>
                    <li className='cursor-pointer font-bold text-lg'>TV Shows</li>
                    <li className='cursor-pointer font-bold text-lg'>People</li>
                    <li className='cursor-pointer font-bold text-lg'>More</li>
                </ul>
            </div>
            <div className="flex gap-4 py-4 items-center">
                <div className="w-5">
                <FontAwesomeIcon className='text-white cursor-pointer' icon={faPlus}/>
                </div>
                <ul className='flex gap-4 text-white items-center'>
                    <li className='cursor-pointer  rounded-md border-2 px-[3px] py-[1px]'>EN</li>
                    <li className='cursor-pointer font-bold text-lg'>Login</li>
                    <li className='cursor-pointer font-bold text-lg'>Join MV World</li>
                    <div className="w-5">
                    <FontAwesomeIcon  className='text-cyan-400 cursor-pointer' icon={faSearch}/>
                    </div>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar