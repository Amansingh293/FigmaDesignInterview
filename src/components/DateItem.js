import React from 'react'

export const DateItem = ({date , activeIndex}) => {
  return (
    <div className={`w-[4.5rem] h-fit border p-2 rounded-md flex flex-col justify-center items-center ${activeIndex && "bg-[#F7F7F7]"} ${activeIndex && "border border-black"}`} >
        <div>{date.day}</div>
        <div className='font-[700]'>{date.date} {date.month}</div>
    </div>
  )
}
