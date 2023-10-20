import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/header.js';
import Video from './components/video/video.js';
import Videodescription from './components/video-description/video-description.js';
import Commentsection from './components/comment-section/comment-section';
import Aside from './components/aside/aside';
import videoDetails from './data/video-details.json';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Header />
      <Video posterImage={selectedVideo.image} />
      <Videodescription
        selectedVideo={selectedVideo}
      />
      <Commentsection videoData={selectedVideo} />
      <Aside handleVideoSelect={handleVideoSelect} selectedVideo={selectedVideo} />
      
    </>
  );
}

export default App;