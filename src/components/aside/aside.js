import React from 'react';
import './aside.scss';
import videoData from '../../data/video-details.json';


function Aside({ handleVideoSelect, selectedVideo }) {
  const handleVideoClick = (video) => {
    handleVideoSelect(video);
  };

  // Filter videoData to exclude the selected video
  const nextVideos = videoData.filter((video) => video.id !== selectedVideo.id);

  return (
    <div className='aside'>
      <h2 className="aside__title">NEXT VIDEO</h2>
      {nextVideos.map((video) => (
        <div className="aside__video" key={video.id} onClick={() => handleVideoClick(video)}>
          <img className="aside__video-image" src={video.image} alt="video" />
          <div className="aside__video-text">
            <p className="aside__video-title">{video.title}</p>
            <p className="aside__video-channel">{video.channel}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Aside;