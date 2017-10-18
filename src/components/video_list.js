import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props)=>{
  let videoItems=props.videos.map((item)=>{
      return (
        <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={item}
        key={item.etag} />
      )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;
