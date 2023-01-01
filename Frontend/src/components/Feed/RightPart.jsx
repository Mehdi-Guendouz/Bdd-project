import React from 'react';
import Tasks from './Tasks';
import plus from '../../img/icons/plus.png'
import './feed.css'

const RightPart = () => {
    return (
        <div className='div2  h-fit  font-fam-feed flex items-center justify-start flex-col gap-4'>
            
            <div className="w-[300px] py-3 border-solid border-[1px] border-[#0A1682]  box-shadow rounded-[10px]">
                <div className="flex items-center justify-between px-2">
                    <h3 className='text-[#000] text-[18px] font-semibold'>Assigned tasks</h3>
                    <h3 className='text-[#4C4C4C] text-[18px] font-normal'>Recent</h3>
                </div>
                <Tasks/>
                <Tasks/>
                <Tasks/>
            </div>
            <div className="py-6 box-shadow border-[1px] border-solid border-[#0A1682] bg-white rounded-[10px] flex items-center justify-center flex-col  w-[300px]">
                <h1 className='text-[#0A1682] text-[20px] font-semibold uppercase'>assign a new task</h1>
                <img src={plus} alt="" />
            </div>
        </div>
    );
}

export default RightPart;
