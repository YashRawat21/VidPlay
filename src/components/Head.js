import React, { useEffect, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { YOUTUBE_SEARCH_API, hamburger_link,youTube_logo } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';


const Head = () => {
    const [searchQuery , setSearchQuery] = useState("");
    const [suggestions , setSuggestions] = useState([])
  const dispatch = useDispatch();
  const hamburgerClickHandler = () => {
       dispatch(toggleMenu());
  }

 
    //Debouncing
  // Make Api call after every key press
  //but if difference between 2 api calls is < 200ms
  // decline the API call
    useEffect(() => {
   const timer = setTimeout ( () =>  getSuggestions() , 200 )

    return(() => {
      clearTimeout(timer)
    })
    },[searchQuery])
  const getSuggestions = async() => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
     console.log(json[1])
     setSuggestions(json[1])
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1 items-center'>
            <img onClick = {() => hamburgerClickHandler()}className = "h-8 cursor-pointer"src = {hamburger_link} alt='hamburgerImg' />
            <img className='h-14 mx-2 cursor-pointer' src= {youTube_logo} alt='youtubeLogo'/> 
        </div>
        

        <div className='col-span-10 text-center'>
          <div>

            <input className = " px-5 w-1/2 border border-gray-400 p-2 rounded-l-full  outline-none " placeholder ="Search"type='search' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
            <button className='border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100 text-black cursor-pointer'><SearchRoundedIcon /></button>
          </div>
        <div className='fixed py-2 px-2 bg-white ml-[14rem] w-[34rem] shadow-lg rounded-lg border border-gray-100'>

          <ul className='text-left list-none  '>
            {
              suggestions.map((s) => <li key = {s} className='py-2 px-3 shadow-sm hover:bg-gray-100'><SearchRoundedIcon />{s}</li> )
            }



          </ul>
        
        </div>
        </div>
        
        <div className='col-span-1'>
            <AccountCircleRoundedIcon className='h-8 mt-3 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Head