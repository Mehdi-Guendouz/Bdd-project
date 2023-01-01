import React from 'react'
import firstpic from '../../../img/firstpic.png'
import secondpic from '../../../img/secondpic.png'

export default function Feuters() {
  return (
    <div class="feed2 section">
    <div class="content">
        <div class="titles">
            <h2>FEATURES</h2>
            <h2>WHY US?</h2>
        </div>
        <div class="small">
            <div class="writing">
                <h3>Specifically for small business</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod purus id elit placerat, finibus finibus magna bibendum. Aenean volutpat interdum lacus sit amet ornare. Maecenas ut lacus nec tellus feugiat feugiat. Curabitur vel dapibus nunc. Aenean dapibus arcu nec erat elementum, interdum porta enim consectetur. Cras dapibus, orci consequat .</p>
            </div>
            <img src={firstpic} alt=""/>
        </div>
        <div class="big ">
            <img src={secondpic} alt="" className='w-[300px]'/>
            <div class="writing ">
                <h3>Specifically for big business</h3>
                <p className='w-fit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non pretium quam, eu mollis nunc. Quisque faucibus eu dolor id gravida. Aliquam pharetra a urna quis eleifend. Mauris euismod purus id elit placerat, finibus finibus magna bibendum. Aenean volutpat interdum lacus sit amet ornare. Maecenas ut lacus nec tellus feugiat feugiat. Curabitur vel dapibus nunc. Aenean dapibus arcu nec erat elementum, interdum porta enim consectetur. Cras dapibus, orci consequat .</p>
            </div>
        </div>
    </div>
</div>
  )
}
