import React, {useState} from 'react'
import './feed.css'
import search from '../../img/icons/search.png'
import arrowdown from '../../img/icons/arrowdown.png'
import add from '../../img/icons/add.png'
import mahdipic from '../../img/profilePic.JPG'
import MembRq from './modal/MembRq'


export default function NavbarFeed() {
    const [modaleOpen, setModale] = useState(false)

    const handelClickMemb = () =>{
        setModale(()=> true)
    }
    return (
        <div className='font-fam-feed w-full flex items-center  justify-around rounded-[56px] bg-[#fff] border-solid border-[0.5px] border-[#4C4C4C] py-5 mt-5'>
            <h1 className='text-[#0A1682] font-bold'><span className='text-[#F75C03]'>W</span>-LOUD</h1>
            <div className='relative'>
                <input type="text" name="" id="" placeholder='Search' className='py-2 px-5 pl-10 w-[300px] rounded-[14px] border-solid border-[2px] border-[#0A1682]' />
                <img src={search} alt="" className='absolute left-0 top-0 bottom-0 translate-y-2 translate-x-2'/>
            </div>
            <div className='relative px-4 py-2 border-solid border-[2px] border-[#0A1682] rounded-[10px] box-shadow cursor-pointer' onClick={handelClickMemb}>
                <h3 className='mr-5 font-bold capitalize text-[#0A1682] text-[16px] '>membershipe requests</h3>
                {/* thats the notification circel */}
                <div className='absolute h-[15px] w-[15px] bg-[#F75C03] rounded-full right-0 top-0 translate-x-2 translate-y-[-7px]'></div>
                {/* the end of the notification */}
                <img src={arrowdown} alt="" className='absolute right-0 top-[50%] translate-x-[-10px] translate-y-[-5.5px]'/>
                {/* this is the membershipe modal (popup) u will find it in the modal folder */}
                <MembRq modaleOpen={modaleOpen} setModale={setModale} />
            </div>
            <div className='flex items-center justify-center gap-[10px] w-[104px] h-[50px] text-white bg-[#0A1682] rounded-[10px]  box-shadow'>
                <h3 className='font-bold text-[16px]'>Invite</h3>
                <img src={add} alt="" />
            </div>
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
    )
}