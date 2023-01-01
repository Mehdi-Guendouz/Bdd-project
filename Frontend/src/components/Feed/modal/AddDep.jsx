import React from 'react';
import { Modal } from '@mantine/core';
import closeModal from '../../../img/icons/closeModal.png'
import addblue from '../../../img/icons/addblue.png'

import Suggestions from './Suggestions';


const MembRq = ({modaleOpen , setModale}) => {
    return (
        <Modal
        opened={modaleOpen}
        withCloseButton={false}
        size="55%" 
        >
            <div className='w-full h-full flex items-center justify-center flex-col '>
                <div className='flex items-center justify-between mb-4 w-full'>
                    <h1 className='text-[20px] font-bold text-[#0A1682] uppercase'>ADD departement</h1> 
                    <img src={closeModal} alt="" className='cursor-pointer' onClick={() => setModale(false)}/>
                </div>
                <div className='flex items-center justify-center gap-3 flex-col relative w-[70%]'>
                    <input type="text" placeholder='Enter the name of the departement' className='text-[#4C4C4C] text-[16px] font-medium rounded-[10px] w-full px-2 py-2 outline-none border-solid border-[1px] border-[#0A1682]'/>
                    <input type="text" placeholder='Choose memebers'  className='text-[#4C4C4C] text-[16px] font-medium rounded-[10px] w-full px-2 py-2 outline-none border-solid border-[1px] border-[#0A1682]'/>
                    <img src={addblue} alt="" className=' absolute right-0 translate-x-[-10px] translate-y-[28px]'/>
                </div>
                <div className='w-[70%] text-start mt-5'>
                    <h3 className='text-[#4C4C4C] text-[17px] font-medium'>Suggestions</h3>
                </div>
                <div className=' mt-5 grid grid-cols-2 gap-5 items-center justify-items-center '>
                    <Suggestions />
                    <Suggestions />
                    <Suggestions />
                    <Suggestions />
                    <Suggestions />
                    <Suggestions />
                    <Suggestions />
                </div>
                <div className='w-full text-end px-4'>
                    <button className='rounded-[10px] bg-[#0A1682] font-bold text-[15px] text-white p-2 px-4'>Confirm</button>
                </div>
            </div>
        </Modal>
    );
}

export default MembRq;
