import React from 'react'
import instagram from '../../../img/icons/ig.png'
import facebook from '../../../img/icons/fb.png'
import message from '../../../img/icons/msg.png'

export default function Footer() {
  return (
    <footer className='flex items-center jsuctify-center'>
    <div class="footer-logo logo">
        <h1><span class="orange">W</span>-LOUD</h1>
    </div>
    <div class=" socials gap-[22px] mr-6 ">
        <img src={facebook} alt="" className='w-[50px] h-[50px]'/>
        <img src={instagram} alt="" className='w-[50px] h-[50px]'/>
        <img src={message} alt="" className='w-[50px] h-[50px]'/>
    </div>
    <p className=''>Copyright © 2022. All right reserved <br />by Nour Boumediene</p>
</footer>
  )
}
