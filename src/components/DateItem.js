import React from 'react'

export const DateItem = ({date}) => {
  return (
    <div className='w-[4rem] h-[3rem] border flex flex-col justify-center items-center'>
        <div>Mon</div>
        <div className='font-[700]'>22 Jan</div>
    </div>
  )
}
