import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from 'react-router-dom';
import { hamburger_link,youTube_logo } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
const Head = () => {
  const dispatch = useDispatch();
  const hamburgerClickHandler = () => {
       dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 items-center'>
            <img onClick = {() => hamburgerClickHandler()}className = "h-8 cursor-pointer"src = {hamburger_link} alt='hamburgerImg' />
            <img className='h-14 mx-2 cursor-pointer' src= {youTube_logo} alt='youtubeLogo'/> 
        </div>
        <div className='col-span-10 text-center'>
            <input className = "w-1/2 border border-gray-400 p-2 rounded-l-full  outline-none " placeholder ="Search"type='search' />
            <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100 text-black cursor-pointer'><SearchRoundedIcon /></button>
        </div>
        <div className='col-span-1'>
            <AccountCircleRoundedIcon className='h-8 mt-3 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Head