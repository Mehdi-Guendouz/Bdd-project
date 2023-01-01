import React from 'react';
import { Modal } from '@mantine/core';
import closeModal from '../../../img/icons/closeModal.png'
import Requests from './Requests';


const MembRq = ({modaleOpen , setModale}) => {
    return (
        <Modal
        opened={modaleOpen}
        withCloseButton={false}
        size="55%" 
        >
            <div className='w-full h-full'>
                <div className='flex items-center justify-between mb-4'>
                    <h1 className='text-[20px] font-bold text-[#0A1682] capitalize'>membershipe requests</h1> 
                    <img src={closeModal} alt="" className='cursor-pointer' onClick={() => setModale(false)}/>
                </div>
                <Requests />
            </div>
        </Modal>
    );
}

export default MembRq;
