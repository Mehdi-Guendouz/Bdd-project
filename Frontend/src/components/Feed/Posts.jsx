import React from 'react';
import mahdipic from '../../img/profilePic.JPG'
import postpic from '../../img/postpic.jpg'
import threePoint from '../../img/icons/threePoint.png'
import chat from '../../img/icons/chat.png'
import send from '../../img/icons/send.png'
import like from '../../img/icons/like.png'
import moreinfo from '../../img/icons/moreinfo.png'


const Posts = () => {
    return (
        <div className='w-[85%] border-solid border-[1px] border-[#0A1682] bg-white rounded-[10px] box-shadow'>
            <div className="flex items-center justify-between px-6 py-6">
                <div className="flex items-center justify-center gap-4">
                    <div className='w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center' >
                        <img src={mahdipic} className='w-[60px] h-[60px] bg-cover rounded-full' alt=""/>
                    </div>
                    <div className='text-[16px] flex items-start justify-center  flex-col'>
                        <h3 className='font-bold'>Geundouz Mehdi</h3>
                        <p className='font-normal'>Role in the company</p>
                    </div>
                </div>
                <img src={moreinfo} alt="" />
            </div>
            <div className="">
                <p className='px-6 text-[16px] text-[#4C4C4C] font-normal pb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus id delectus aspernatur, alias facere soluta exercitationem blanditiis veritatis atque odit autem reiciendis. Ab blanditiis hic quo, quas ad ullam reiciendis fuga deserunt aspernatur error nihil tenetur! Placeat voluptatem maiores ut.</p>
                <img src={postpic} alt="" className='max-h-[350px] w-full'/>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center justify-center gap-2">
                    <img src={like} alt="" />
                    <img src={chat} alt="" />
                    <img src={send} alt="" />
                </div>
                <img src={threePoint} alt="" />
            </div>
        </div>
    );
}

export default Posts;
