import '../../Styling/HomeContainer.css'
import InputEmoji from 'react-input-emoji'
import { useState } from 'react'

function Container() {

    const [ text, setText ] = useState('')
  
    function handleOnEnter (text: String) {
      console.log(text);
    }

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
            </div>
        </div>
    )
}

export default Container