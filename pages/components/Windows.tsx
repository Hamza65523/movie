import React from 'react'
import ReactPlayer from 'react-player'
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
interface Props {
    selected:boolean,
    url:string,
    setSelected:any
  }
const Windows:NextPage<Props> = ({
    selected,url,setSelected
}) => {
    console.log(url)
  return (
        <div className=" ">
            <div className={`absolute w-[100vw] h-[100vh] bg-[#00000099] top-0 right-0  ${selected?'block ':'hidden '}`}>
         <div className={` absolute top-36 right-14 ${selected?'block ':'hidden '}`}>
                <div className="w-10 absolute -top-16 right-5">
            <FontAwesomeIcon onClick={()=>setSelected(!selected)} className='text-white cursor-pointer' icon={faXmark}/>
                </div>
         <ReactPlayer width={1000} height={500} url={url}/>
         </div>
        </div>
        </div>
  )
}

export default Windows