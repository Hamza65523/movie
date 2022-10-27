import React, { useEffect, useState } from "react";
import Card from "./Card";

import { NextPage } from 'next';
interface Props {
    title: string,
    category:any,
    moviesData:any
  }
const FilterMenu:NextPage<Props> = ({
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
    handlerFilter(category[0],0)
  },[])
  return (
   <div className="cardtrailer" >
     <div className="w-[95%] mx-auto my-0">
      <div className="flex  gap-4 py-4 px-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div className={`${selected==0?'pr-2 ':selected!==0 &&  selected!==(category.length -1)?'px-2 ':selected==(category.length -1)?'pl-2 ':'' }flex  gap-4 items-center border-black font-bold border-[1px]  rounded-2xl`}>
            {category.map((items:any,index:Number)=>(
          <span className={selected==index?'tabhead ':'cursor-pointer '} onClick={()=>handlerFilter(items,index)} ><h1 className={selected==index?'tab':''}>{items}</h1></span>
            ))}
         
        </div>
      </div>
      <div className="flex gap-4  overflow-x-scroll">
       {data&&data.map((items:any)=>(
        <Card  
        title={items.title}
        date={items.date}
        img={items.img}
        percentage={items.percentage}
        />
       ))}
      </div>
    </div>
   </div>
  );
};

export default FilterMenu;
