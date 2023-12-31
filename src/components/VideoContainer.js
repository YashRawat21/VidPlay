import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API} from '../utils/Constants'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';
import Shimmer from './Shimmer';
const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  }
  useEffect(() => {
     getVideos()
  },[])
    
  const closeMenu = useSelector((store) => store.app.closeMenu)
  return (
    <div className=' flex flex-wrap '>
      {
        videos.length > 0
       ?
      videos.map((video) => {
      return <Link key={video.id} to = {"/watch?v=" + video.id} > <VideoCard info={video}/></Link>
      }) :
     <Shimmer />
  

}
    </div>
  )
} 

export default VideoContainer