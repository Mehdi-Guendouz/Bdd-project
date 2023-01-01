import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex items-center jusctify-center'>
      <nav className="container">
        <div className="logo section w-[20%]">
            <h1><span>W</span>-LOUD</h1>
        </div>
        <ul className="flex items-center jusctify-center  links">
          <li className='ml-8'><a href="#">Home</a></li>
          <li className='ml-8'><a href="#">About Us</a></li>
          <li className='ml-8'><a href="#">Features</a></li>
          <li className='ml-8'><a href="#">Get Started</a></li>
          <li className='ml-8'><a href="#">Contact Us</a></li>
        </ul>
        {/* <div className="responsive"><img src="/img/liste 1.png" alt=""></div> */}
      </nav>
    </div>
    
  )
}
