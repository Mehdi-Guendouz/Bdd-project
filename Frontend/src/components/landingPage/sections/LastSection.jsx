import React from 'react'
import lastpic from '../../../img/lastpic.png'

export default function LastSection() {
  return (
    <div class="feed3 section">
      <div class="title">
          {/* <img src="/img/Ellipse 32.png" alt=""/> */}
          <div class="box">FOR BOTH</div>
          {/* <img src="/img/Ellipse 32.png" alt=""/> */}
      </div>
      <div class="content">
          <img src={lastpic} alt=""/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod purus id elit placerat, finibus finibus magna bibendum. Aenean volutpat interdum lacus sit amet ornare. Maecenas ut lacus nec tellus feugiat feugiat. Curabitur vel dapibus nunc. Aenean dapibus arcu nec erat elementum, interdum porta enim consectetur. Cras dapibus, orci consequat lacinia</p>
          <h2>CHOOSE YOUR OFFER AND JOIN US</h2>
      </div>
      <div class="btn">
          {/* <img src="/img/Ellipse 32.png" alt=""/> */}
          <button>LET'S GET STARTED</button>
          {/* <img src="/img/Ellipse 32.png" alt=""/> */}
      </div>
    
    </div>     
  )
}
