import React, {useState} from 'react';
import './feed.css'
import mahdipic from '../../img/profilePic.JPG'
import plus from '../../img/icons/plus.png'
import AddDep from './modal/AddDep'




const LeftpartFeed = () => {
    const [modaleOpen, setModale] = useState(false)

    const handelAddDep = () =>{
        setModale(()=> true)
    }


    const sameboxStyle = 'box-shadow border-[1px] border-solid border-[#0A1682] bg-white rounded-[10px] flex items-center justify-center flex-col  h-[200px] w-[250px]'
    return (
        <div className='div3 h-full w-full flex items-center justify-start flex-col gap-[35px] px-4'>
            <div className={`${sameboxStyle} gap-4`}>
                <div className='flex items-center justify-center gap-2'>
                    <div className='w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center' >
                        <img src={mahdipic} className='w-[50px] h-[50px] bg-cover rounded-full' alt=""/>
                    </div>
                    <h3 className='text-[17px] text-black font-medium'>resposible name</h3>
                </div>
                <div className="flex items-start justify-ceter flex-col gap-3">
                    <h2 className="capitalize text-[17px] font-semibold text-black">name of the department</h2>
                    <h3 className="capitalize text-[17px] font-semibold text-[#4C4C4C]">members: <span className='text-black font-bold'>11</span></h3>
                    <h3 className="capitalize text-[17px] font-semibold text-[#4C4C4C]">notifications: <span className='text-black font-bold'>15</span></h3>
                </div>  
            </div>

            <div className={`${sameboxStyle} gap-2`} >
                <h1 className='text-[#0A1682] text-[20px] font-semibold uppercase'>add departement</h1>
                <img src={plus} alt="" onClick={handelAddDep} className='cursor-pointer'/>
                <AddDep modaleOpen={modaleOpen} setModale={setModale} />
            </div>
            
        </div>
    );
}

export default LeftpartFeed;
