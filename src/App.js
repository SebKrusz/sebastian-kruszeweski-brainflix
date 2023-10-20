import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Video from './components/video/video.js';
import Videodescription from './components/video-description/video-description.js';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };
  return (
    <>
      <Header />
      <Video posterImage={selectedVideo.image} />
      <Videodescription selectedVideo={selectedVideo}/>

      
    </>
  );
}

export default App;