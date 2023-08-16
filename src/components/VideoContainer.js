import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API} from '../utils/Constants'
import VideoCard from './VideoCard';
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

  return (
    <div className=' flex flex-wrap'>
      {
        videos.length > 0
       ?
      videos.map((video) => {
      return  <VideoCard info={video}/>
      }) :
      <h1>Loading...</h1>

}
    </div>
  )
} 

export default VideoContainer