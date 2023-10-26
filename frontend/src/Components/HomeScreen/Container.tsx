import '../../Styling/HomeContainer.css'
import InputEmoji from 'react-input-emoji'
import { useState } from 'react'
import activeUser from '../../Assets/active-user.png'

function Container() {

    const [ text, setText ] = useState('')
  
    function handleOnEnter (text: String) {
      console.log(text);
    }

    const activeUsers = ["imuhammad", "ahmus", "ahmed", "kinza123", "areeba", "roha", "amna", "shabana", "khalid",];
    
    const activeUsersList = activeUsers.map((users, index) => (
        <div className='active-user' key={index}>
            <img className='active-user-pfp' src={activeUser} alt='Active user pfp.'/>
            <p className='user-name'>{users}</p>
            <div className='active-user-signal'></div>
        </div>
    ));
    

    return (
        <div className='center-box'>
            <div className='messages-area'>
                <InputEmoji
                    value={text}
                    onChange={setText}
                    cleanOnEnter
                    onEnter={handleOnEnter}
                    placeholder="Type a message"
                />
            </div>
            <div className='active-users'>
                <h4>ACTIVE USERS</h4>
                {activeUsersList}
            </div>
        </div>
    )
}

export default Container