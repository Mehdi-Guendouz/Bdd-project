import React from 'react'
import mahdipic from '../../../img/profilePic.JPG'

export default function Requests() {
  return (
    <div className='py-4 flex items-center justify-between'>
        <div>
            <div className='flex items-center justify-center gap-4'>
                <div className='w-[60px] h-[60px] rounded-full flex justify-center items-center' >
                    <img src={mahdipic} className='w-[60px] h-[60px] bg-cover rounded-full' alt=""/>
                </div>
                <div className='text-[16px] flex items-start justify-center  flex-col'>
                    <h3 className='font-bold'>Geundouz Mehdi</h3>
                    <p className='font-normal'>Role in the company</p>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center gap-5 px-6'> 
            <button className='px-5 py-3 text-[18px] font-bold bg-[#0A1682] text-white rounded-[10px] border-solid border-[2px] border-[#0A1682]'>Accepte</button>
            <button className='px-5 py-3 text-[18px] font-bold bg-[#fff] text-[#0a1682] border-solid border-[2px] border-[#0A1682] rounded-[10px]'>Refuse</button>
        </div>
    </div>
  )
}
