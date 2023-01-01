import React from 'react';
import './feed.css'
import mahdipic from '../../img/profilePic.JPG'
import depart from '../../img/icons/depart.png'
import vector from '../../img/icons/Vector.png'
import Posts from './Posts';



const PostsPart = () => {
    return (
        <div className='w-full flex items-center justify-start flex-col div1 px-4 gap-7'>
            <div className="bg-white border-solid border-[1px] border-[#0A1682] rounded-[10px] px-6 py-4 w-[85%] box-shadow">
                <div className="flex items-center justify-center gap-4">
                    <div className='w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center' >
                        <img src={mahdipic} className='w-[50px] h-[50px] bg-cover rounded-full' alt=""/>
                    </div>
                    <input type="text" className='w-[80%] h-[45px] rounded-[40px] border-solid border-[1px] border-[#4C4C4C] px-4 border-opacity-[45%]' placeholder='Write Something'/>
                </div>
                <div className=" flex items-center justify-around pt-4 px-4">
                    <div className='flex items-center justify-center gap-2 text-[16px] font-semibold text-[#4C4C4C] capitalize cursor-pointer'>
                        <img src={vector} alt="" />
                        <h3>attach files</h3>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-[16px] font-semibold text-[#4C4C4C] capitalize cursor-pointer'>
                        <img src={depart} alt="" />
                        <h3>departement</h3>
                    </div>
                </div>
            </div>

            {/* the post model */}
            <Posts/>
            <Posts/>
            <Posts/>
        </div>
    );
}

export default PostsPart;
