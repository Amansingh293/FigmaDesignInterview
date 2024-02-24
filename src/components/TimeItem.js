import React from 'react'

export const TimeItem = ({time}) => {
  return (
    <div className={`w-fit h-[2rem] border p-6 rounded-md flex justify-center items-center cursor-pointer`} >{time.hour}:00</div>
  )
}
