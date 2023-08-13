import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { hamburger_link, youTube_logo } from '../assets/Links';
const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 items-center'>
            <img className = "h-8"src = {hamburger_link} alt='hamburgerImg' />
            <img className='h-14 mx-2' src= {youTube_logo} alt='youtubeLogo'/>
        </div>
        <div className='col-span-10 text-center'>
            <input className = "w-1/2 border border-gray-400 p-2 rounded-l-full  outline-none" placeholder ="Search"type='search' />
            <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100 text-black'><SearchRoundedIcon /></button>
        </div>
        <div className='col-span-1'>
            <AccountCircleRoundedIcon className='h-8 mt-3'/>
        </div>
    </div>
  )
}

export default Head