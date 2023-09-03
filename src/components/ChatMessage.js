import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
const ChatMessage = ({name,message}) => {
  return (
    <div className='shadow-sm flex items-center p-2'>
        <AccountCircleRoundedIcon />
        <span className='font-bold px-2'>{name}</span> {" "}
        <span>{message}</span>

    </div>
  )
}

export default ChatMessage