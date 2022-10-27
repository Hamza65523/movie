import React, { useState } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import Windows from './Windows';
import Image from 'next/image';

interface Props {
    title: string,
    date:string,
    img:any ,
    url:string
  }
const TrailerCard:NextPage<Props> = ({
    title,
    date,
    img,
    url
}) => {
  const [selected,setSelected]=useState(false)
  const handlerCHeck =()=>{
    setSelected(!selected)
  }
  return (
    <div className='w-[600px]'>
        <div className="rounded-md">
            <div className="relative w-72  ">
            <div className='relative flex justify-center items-center'>
              <div className="">
              <Image  src={img}  alt='' className='w-72 h-40 rounded-2xl'/>
              </div>
            <div className="w-10 hover:w-14 transition-all absolute ">
              <FontAwesomeIcon icon={faPlay} onClick={handlerCHeck}  className='text-white cursor-pointer'/>
            </div>
            </div>
            <div className="mt-2 text-center  text-ce">
                <h1 className=' font-bold'>{title}</h1>
                <p className='text-gray-400 text-sm'>{date}</p>
            </div>
            </div>
        </div>
       {selected&& <Windows url={url} selected={selected} setSelected={setSelected}/>}
    </div>
  )
}

export default TrailerCard