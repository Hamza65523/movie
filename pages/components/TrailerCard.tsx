import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PIC from '../assets/img/aladin.jpg'
import Image from 'next/image';
import 'react-circular-progressbar/dist/styles.css';
import ReactPlayer from 'react-player'
import { NextPage } from 'next';
interface Props {
    title: string,
    date:string,
    img:any ,
  }
const TrailerCard:NextPage<Props> = ({
    title,
    date,
    img,
}) => {
  return (
    <div className='w-[400px]'>
        <div className="rounded-md">
            <div className="relative w-64  ">
            <div className="">
          {/* <ReactPlayer/> */}
            </div>
            <div className="mt-2 text-center  text-ce">
                <h1 className=' font-bold'>{title}</h1>
                <p className='text-gray-500 text-sm'>{date}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default TrailerCard