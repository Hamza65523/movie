import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import FilterMenu from '../components/FilterMenu'
import {moviesData,moviesData1} from '../Data'
import Trailer from '../components/Trailer'
import Join from '../components/Join'
let category = ['Streaming','On TV','For Rent','In Theaters']
let category1 = ['Movies','TV']
let category2 = ['Today','This Week']
const HomeScreen = () => {
  return (
    <div className='mx-auto my-0  max-w-[1200px]'>
      <Navbar/>
      <Intro/>
      <FilterMenu title="What's Popolar" moviesData={moviesData} category={category}/>
      <FilterMenu title="Free To Watch" moviesData={moviesData1} category={category1}/>
      <Trailer title="Free To Watch" moviesData={moviesData1} category={category}/>
      <FilterMenu title="Trending" moviesData={moviesData} category={category2}/>
      <Join/>
    </div>
  )
}

export default HomeScreen