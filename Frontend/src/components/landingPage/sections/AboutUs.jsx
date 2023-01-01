import React from 'react'
import person1 from '../../../img/person1.png'

export default function AboutUs() {
  return (
      <div class="feed section">
      <div class="title">
          {/* <img src="/img/Ellipse 32.png" alt="">  */}
          <div class="box">LET'S EXPLORE OUR FEED</div>
          {/* <img src="/img/Ellipse 32.png" alt=""> */}
      </div>
      <div class="content">
          <div class="titles">
              <h2>ABOUT US</h2>
              <h2>WHO ARE WE?</h2>
          </div>
          <div class="persons grid grid-cols-3  gap-10 w-full">
              <div class="text-[18px] flex items-center jusctify-center flex-col ">
                  <img src={person1} alt="" />
                  <h4 className='text-black text-center py-2'>Name Last Name</h4>
                  <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
              </div>
              <div class="text-[18px] flex items-center jusctify-center flex-col ">
                  <img src={person1} alt="" />
                  <h4 className='text-black text-center py-2'>Name Last Name</h4>
                  <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
              </div>
              <div class="text-[18px] flex items-center jusctify-center flex-col ">
                  <img src={person1} alt="" />
                  <h4 className='text-black text-center py-2'>Name Last Name</h4>
                  <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
              </div>
              <div className='w-full items-center justify-around flex grid-div'>
                  <div class="text-[18px] flex items-center jusctify-center flex-col ">
                      <img src={person1} alt="" />
                      <h4 className='text-black text-center py-2'>Name Last Name</h4>
                      <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
                  </div>
                  <div class="text-[18px] flex items-center jusctify-center flex-col ">
                      <img src={person1} alt="" />
                      <h4 className='text-black text-center py-2'>Name Last Name</h4>
                      <p className='text-[#838383] text-center py-2 max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod</p>
                  </div>
              </div>
              
              
          </div>
      </div>
      <div class="subtitles">
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
  </div>
  )
}
