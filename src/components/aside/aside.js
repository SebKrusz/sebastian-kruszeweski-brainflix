import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './aside.scss';

function Aside({ handleVideoSelect, selectedVideo }) {
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    const baseURL = 'https://project-2-api.herokuapp.com';
    const endURL = '/videos';
    const keyURL = '?api_key=dffeb61b-8257-4b5c-b16a-fb672e3a7258';

    axios.get(baseURL + endURL + keyURL)
      .then(response => {
        const selectedVideoId = selectedVideo ? selectedVideo.id : null;
        const filteredVideos = response.data.filter(video => video.id !== selectedVideoId);
        setNextVideos(filteredVideos);
      })
      .catch(error => {
        console.error('Error fetching next videos: ', error);
      });
  }, [selectedVideo]);

  const handleVideoClick = (video) => {
    handleVideoSelect(video);
  };

  return (
    <div className='aside'>
      <h2 className="aside__title">NEXT VIDEO</h2>
      {nextVideos.map((video) => (
        <Link to={`/${video.id}`} key={video.id}>
          <div className="aside__video" onClick={() => handleVideoClick(video)}>
            <img className="aside__video-image" src={video.image} alt="video" />
            <div className="aside__video-text">
              <p className="aside__video-title">{video.title}</p>
              <p className="aside__video-channel">{video.channel}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Aside;