import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages)
    useEffect(() => {
      const interval =  setInterval(() => {
           dispatch(addMessage({
            name: generateRandomNames(),
            message :   makeRandomMessage(20) +  "🚀"
           }))
        },2000)

        return () => clearInterval(interval);
    },[])
  return (
    <div className='w-full h-[500px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     
         {
          chatMessages.map((c) => <ChatMessage name= {c.name} message = {c.message}/>)
         }
    </div>
  )
}

export default LiveChat