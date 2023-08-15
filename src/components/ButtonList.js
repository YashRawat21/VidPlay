import React from 'react'
import Buttons from './Buttons'


const List = ["All" , "Gaming" , "Songs" , "Live", "Fitness" , "Music" , "News", "Cricket" , "Podcast" , "Football" ,"BigBoss","Soccer"];


const ButtonList = () => {
  return (
    <div className='flex'>
      {
        List.map((item) => <Buttons  name = {item}/>)
      }
    </div>
  )
}

export default ButtonList