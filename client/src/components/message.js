import React from 'react';

const Message = ({message: {user, text}, name}) => {
    let isSentByCurUser = false;
    const trimmed = name.trim().toLowerCase();

    if (user === trimmed){ 
        isSentByCurUser = true;
    }

    return(
        isSentByCurUser
        ?(
            <div className='messageContainer justifyEnd'>
                <div className='messageBox backgroundBlue'>
                    <p className='sentText pr-10'>~ {trimmed}</p>
                    <p className='messageText colorWhite'>{text}</p>
                </div>
            </div>
        )
        :(
            <div className='messageContainer justifyStart'>
                
                <div className='messageBox1 backgroundLight'>
                    <p className='sentText pl-10'>~ {user}</p>
                    <p className='messageText colorDark'>{text}</p>
                </div>
            </div>
        )
    )
}

export default Message;