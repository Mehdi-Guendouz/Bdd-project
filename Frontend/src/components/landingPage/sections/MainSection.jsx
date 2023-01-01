import React from 'react'
import mainPicture from '../../../img/main.png'

export default function MainSection() {
  return (
    <div className="main flex items-center justify-center gap-10 py-14 px-10 w-full">
        <div className="left">
            <h1>WE CONNECT IN A WAY THAT WAS NEVER DONE <br/>BEFORE</h1>
            <button>GET STARTED</button>
        </div>
        <div className=''>
            <img src={mainPicture} alt="div img" />
        </div>
    </div> 
  )
}
