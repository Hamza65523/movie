import React, { useEffect, useState } from "react";
import TrailerCard from "./TrailerCard";

import { NextPage } from 'next';
interface Props {
    title: string,
    category:any,
    moviesData:any
  }
const Trailer:NextPage<Props> = ({
    title,
    category,
    moviesData
}) => {
    const [data,setData]= useState(moviesData)
    const [selected,setSelected]= useState(0)

    const handlerFilter=(value:string,id:any)=>{
        setSelected(id)
        let filterData = moviesData.filter((items:any)=>items.category == value)
        setData(filterData)
    }
    
  useEffect(()=>{
    handlerFilter('Movies',0)
  },[])
  
  return (
    <div className="bg-[#032541] text-white">
      <div className="w-[95%] mx-auto my-0">
      <div className="flex  gap-4 py-4 px-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className={`${selected==0?'pr-2 ':selected!==0 &&  selected!==(category.length -1)?'px-2 ':selected==(category.length -1)?'pl-2 ':'' } flex  gap-4 items-center border-green-300   font-bold border-[2px]  rounded-3xl`}>
            {category.map((items:any,index:Number)=>(
          <span className={selected==index?'tabheadtrailer ':'cursor-pointer '} onClick={()=>handlerFilter(items,index)} ><h1 className={selected==index?'tabtrailer':''}>{items}</h1></span>
            ))}
         
        </div>
      </div>
      <div className="flex gap-4  overflow-x-scroll">
       {data&&data.map((items:any)=>(
        <TrailerCard  
        title={items.title}
        date={items.date}
        img={items.img}
        url={items.url}
        />
       ))}
      </div>
    </div>
    </div>
  );
};

export default Trailer;
