import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Video from './components/video/video.js';
import videoDetails from './data/video-details.json';
import Main from './components/main/main.js';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Header />
      <Video posterImage={selectedVideo.image} />
      <Main />
    </>
  );
}

export default App;