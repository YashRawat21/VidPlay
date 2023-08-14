import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppShortcutRoundedIcon from '@mui/icons-material/AppShortcutRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import StreamRoundedIcon from '@mui/icons-material/StreamRounded';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import SportsHandballRoundedIcon from '@mui/icons-material/SportsHandballRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
   
   if(!isMenuOpen) return null;
  
  return(
    <div className='shadow-lg p-5 w-48'>

<ul className='cursor-pointer'>
        <li><HomeRoundedIcon className='flex items-center mr-3 '/>Home</li>
        <li><AppShortcutRoundedIcon className='flex items-center mr-3 '/>Shorts</li>
        <li><VideocamRoundedIcon className='flex items-center mr-3 '/>Videos</li>
        <li><StreamRoundedIcon className='flex items-center mr-3 '/>Live</li>
        
      </ul>
      <hr className='mt-2 w-40'/>
      <h1 className='font-bold pt-5 cursor-pointer'>Subscriptions</h1>
      <ul className='cursor-pointer'>
        <li><LibraryMusicRoundedIcon className='flex items-center mr-3 ' />Music</li>
        <li><SportsHandballRoundedIcon  className='flex items-center mr-3 '  />Sports</li>
        <li> <SportsEsportsRoundedIcon  className='flex items-center mr-3 '  />Gaming</li>
        <li><MovieCreationRoundedIcon  className='flex items-center mr-3 '  />Movies</li>
      
      </ul>
      <hr className='mt-2 w-40'/>
      <h1 className='font-bold pt-5 cursor-pointer'>Watch Later</h1>
      <ul className='cursor-pointer'>
      <li><LibraryMusicRoundedIcon className='flex items-center mr-3 ' />Music</li>
        <li><SportsHandballRoundedIcon  className='flex items-center mr-3 '  />Sports</li>
        <li> <SportsEsportsRoundedIcon  className='flex items-center mr-3 '  />Gaming</li>
        <li><MovieCreationRoundedIcon  className='flex items-center mr-3 '  />Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar