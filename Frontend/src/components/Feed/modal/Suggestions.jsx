import React from 'react'
import addgray from '../../../img/icons/addgray.png'
import mahdipic from '../../../img/profilePic.JPG'

export default function Suggestions() {
  return (
    <div className="rounded-[40px] flex items-center justify-center gap-4 py-2 px-4 border-solid border-[1px] border-[#0A1682] w-fit box-shadow">
        <div className='flex items-center justify-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center' >
                <img src={mahdipic} className='w-[40px] h-[40px] bg-cover rounded-full' alt=""/>
            </div>
            <div className='text-[16px] flex items-start justify-center  flex-col'>
                <h3 className='font-bold text-[10px] text-[#504C4C]'>Geundouz Mehdi</h3>
                <p className='font-normal text-[10px] text-[#504C4C]'>Role in the company</p>
            </div>
        </div>
        <img src={addgray} alt="" />
    </div>
  )
}
