import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'

const HomeScreen = () => {
  return (
    <div className='mx-auto my-0  max-w-[1200px]'>
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default HomeScreen