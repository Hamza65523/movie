import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PIC from '../assets/img/aladin.jpg'
import Image from 'next/image';
import 'react-circular-progressbar/dist/styles.css';
import { NextPage } from 'next';
interface Props {
    title: string,
    date:string,
    img:any ,
    percentage: any,
  }
const Card:NextPage<Props> = ({
    title,
    date,
    img,
    percentage,
}) => {
  return (
    <div className='w-[400px]'>
        <div className="rounded-md">
            <div className="relative w-36 ">
            <div className="">
            <Image src={img} className="rounded-lg w-36 h-52" alt="" />
            </div>
            <div className="w-10 absolute -bottom-4 left-4 ">
            <CircularProgressbar value={percentage} className='p-[2px] bg-black rounded-full'  styles={buildStyles({
            textColor: "white",
            pathColor: "turquoise",
            trailColor: "transparent",
            textSize:30,
        })} text={`${percentage}%`} />
            </div>
            </div>
            <div className="mt-5 pl-4">
                <h1 className=' font-bold'>{title}</h1>
                <p className='text-gray-500 text-sm'>{date}</p>
            </div>
        </div>
    </div>
  )
}

export default Card