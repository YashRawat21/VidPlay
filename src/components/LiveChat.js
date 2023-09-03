import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage , setLiveMessage] = useState()
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages)
    useEffect(() => {
      const interval =  setInterval(() => {
           dispatch(addMessage({
            name: generateRandomNames(),
            message :   makeRandomMessage(20) +  "🚀"
           }))
        },1300)

        return () => clearInterval(interval);
    },[])
  return (
   <>
   
   <div className='w-full h-[500px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>

         {
          chatMessages.map((c) => <ChatMessage name= {c.name} message = {c.message}/>)
         }
        </div>
       
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) => {
       e.preventDefault();
       dispatch(addMessage({
        name:"Yash Rawat",
        message: liveMessage
       }))
       setLiveMessage("")
    }}>
            <input className='w-[320px] px-2 outline-none ' type='text' value={liveMessage} onChange={(e) => {
                setLiveMessage(e.target.value)
            } }/> <button className='px-2 mx-2 bg-green-100'>Send</button>
        </form> 
 </>
  )
}

export default LiveChat