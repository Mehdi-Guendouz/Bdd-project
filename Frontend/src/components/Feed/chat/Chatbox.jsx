import React , {useState} from 'react'
import './chat.css'
import threePoint from '../../../img/icons/threePoint.png'
import profilPic from '../../../img/profilePic.JPG'

export default function Chatbox() {
    const [chateOpen, setChateOpen] = useState(false);
    const chatChangeState = ()=>{
        setChateOpen(prev => !prev)
    }

  return (
    <div className='chat-container chat-header-box'>
        <div className="chat-header" onClick={chatChangeState}>
            <h1>Quick chat</h1>
        </div>
        { chateOpen && 
        <div className="chat-content">
            <div className="online-accounts">
              <div className="profile-img">
                <img src={profilPic} alt="" />
              </div>
              <div className="profile-des">
                <h1>Imededdine</h1>
                <h4>hello ya zwiyan</h4>
              </div>
              <img src={threePoint} alt="" />
            </div>  
        </div>
          }
    </div>
  )
}
