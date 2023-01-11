import React from 'react'
import './forms/loginAdmin.css'
import zigzag  from '../img/icons/zigzag.png';
import {Link} from 'react-router-dom';
import { CopyButton, ActionIcon, Tooltip } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons';


export default function Sharelink() {
  return (
    <div className='container felx items-center justify-center bg-[#FBFBFF] h-screen'>
        <div className='p-10 flex flex-col items-center justify-center  '>
            <div className='flex items-center justify-center py-5 w-full diag-div-lign relative'>
                <div className='h-fit text-center rounded-[26px] w-[60%] border-[#F75C03] border-[6px] border-solid relative circle-div-title circle-div'>
                    <h1 className='text-[#0A1682] uppercase py-4 text-[30px] font-bold'>share your link and get started</h1>
                </div>
            </div>
            <div className='flex items-center justify-center py-10 px-4  w-full ver-line-div relative'>
                {/* this part is decoration part */}
                <img src={zigzag} alt="" className='absolute right-0 bg-[#fbfbff] translate-x-[15.5px] translate-y-[-30px] z-10'/>
                <img src={zigzag} alt="" className='absolute left-0 bg-[#fbfbff] translate-x-[-12.5px] translate-y-[-30px] z-10'/>
                {/* this part is decoration part */}
                <form className='w-full py-5 px-10 ' action="">
                    <h5 className='uppercase text-[#000] text-[30px] font-bold'>there is the link that you and your coworkers will be using to whether login or signup to your space</h5>
                    <div className='w-full flex items-center justify-center flex-col px-6 py-10'>
                        <p className='text-[#838383] text-[16px] uppercase font-bold'>please use your link carefully and share it with only confidential coworkers</p>
                        <CopyButton value="mahdi gg" timeout={2000} >
                        {({ copied, copy }) => (
                            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
                            <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                            </ActionIcon>
                            </Tooltip>
                        )}
                    </CopyButton>
                    </div>
                    <div className='w-full flex items-center justify-center pt-6 diag-div relative'>
                        <button className='bg-[#F75C03] font-bold text-white uppercase text-[30px] w-[50%] py-6 rounded-[26px] circle-div-btn circle-div relative'>the link</button>
                    </div>
                </form>
            </div>
            <div>
                <p className='uppercase text-[#838383] text-[20px] font-bold'>Your link does not work? then try this <span className='text-[#F75C03]'><Link to="/">backup</Link></span></p>
            </div>
        </div>
    </div>
  )
}
