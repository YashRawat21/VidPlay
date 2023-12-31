import React from 'react'


const VideoCard = ({info}) => {
     const {snippet,statistics} = info;
     const {channelTitle,title,thumbnails} = snippet;
  return (

    <div className='p-2 m-2 w-72 rounded-lg shadow-lg ml-11 max-h-96'>
      <img src= {thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}views</li>
      </ul>
    </div>
  )
}


export default VideoCard;