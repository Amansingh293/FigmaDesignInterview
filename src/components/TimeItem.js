import React from 'react'

export const TimeItem = ({time , isActive , setActiveTimeIndex , index}) => {
  return (
    <div className={`w-fit h-[2rem] border p-6 rounded-md flex justify-center items-center cursor-pointer ${ isActive && "border border-black"}`} onClick={()=>setActiveTimeIndex(index)} >{time.hour}:00</div>
  )
}
