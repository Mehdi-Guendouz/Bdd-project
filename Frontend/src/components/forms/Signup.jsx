import React from 'react'
import firstpic from '../../img/firstpic.png'
import lastpic from '../../img/lastpic.png'
import secondpic from '../../img/secondpic.png'
import SignupForm from './SignupForm'
import './signup.css'

export default function Signup() {









  return (
    <div class="feed section">
      <div class="title">
          {/* <img src="/img/Ellipse 32.png" alt="">  */}
          <div class="box">LET'S EXPLORE OUR FEED</div>
          {/* <img src="/img/Ellipse 32.png" alt=""> */}
      </div>
      <div class="content">
          <div class="titles">
              <h2 className='uppercase'>Let's pick your pack</h2>
          </div>
          <div class="persons grid grid-cols-3  gap-10 w-full">
              <div class="text-[18px] flex items-center jusctify-center flex-col">
                <div className=''>
                  <img src={firstpic} alt="" className='w-[250px]'/>
                </div>
                  <h4 className='text-black text-center py-2 titel-font'>small business</h4>
                  <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
              </div>
              <div class="text-[18px] flex items-center jusctify-center flex-col">
                <div className=''>
                  <img src={lastpic} alt="" className='w-[250px]'/>
                </div>
                  <h4 className='text-black text-center py-2 titel-font'>big business</h4>
                  <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
              </div>
              <div class="text-[18px] flex items-center jusctify-center flex-col">
                <div className=''>
                  <img src={secondpic} alt="" className='w-[250px]'/>
                </div>
                  <h4 className='text-black text-center py-2 titel-font'>customize</h4>
                  <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
              </div>  
          </div>
      </div>
      <div class="">
          <div class="subtitle">
              {/* <img src="/img/Ellipse 32.png" alt=""/> */}
              <div class="box">ROLE 1</div>
              {/* <img src="/img/Ellipse 32.png" alt=""/> */}
          </div>
          <div class="subtitle">
              {/* <img src="/img/Ellipse 32.png" alt=""/> */}
              <div class="box">ROLE 2</div>
              {/* <img src="/img/Ellipse 32.png" alt=""/> */}
          </div>
          <div class="subtitle">
              {/* <img src="/img/Ellipse 32.png" alt=""/> */}
              <div class="box">ROLE 3</div>
              {/* <img src="/img/Ellipse 32.png" alt=""/> */}
          </div>
      </div>
      <SignupForm/>
  </div>
  )
}
