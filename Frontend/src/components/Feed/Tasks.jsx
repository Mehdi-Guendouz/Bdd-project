import React from 'react';
import mahdipic from '../../img/profilePic.JPG'
import check from '../../img/icons/check-white.png'

const Tasks = () => {
    return (
        <div className='w-full mt-4'>
            <div className='flex items-center justify-start gap-4 ml-2'>
                <div className='w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center self-start' >
                    <img src={mahdipic} className='w-[60px] h-[60px] bg-cover rounded-full' alt=""/>
                </div>
                <div className='text-[16px] flex items-start justify-center  flex-col'>
                    <h3 className='font-medium text-[17px]'>Geundouz Mehdi</h3>
                    <p className='font-bold text-[12px] text-[#4C4C4C]'>Deadline</p>
                    <div className='w-full flex items-center justify-start mt-2'>
                        <button className='rounded-[8px] capitalize flex items-center justify-center gap-2 bg-[#0A1682] px-[10px] py-2 text-white font-bold'><img src={check} alt="" /> Done</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
