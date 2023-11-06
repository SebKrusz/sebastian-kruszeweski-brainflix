import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Videodescription from '../video-description/video-description';
import Commentsection from '../comment-section/comment-section';
import Aside from '../aside/aside';
import Video from '../video/video'; 
import './main.scss';

function Main() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoComments, setVideoComments] = useState([]);

  useEffect(() => {
    const defaultID = '84e96018-4022-434e-80bf-000ce4cd12b8';

    const fetchData = async (videoID) => {
      try {
        const response = await axios.get(`http://localhost:8080/videos/${videoID}`);
        setSelectedVideo(response.data);
        setVideoComments(response.data.comments);
      } catch (error) {
        console.error('Error fetching video data: ', error);
      }
    };

    fetchData(defaultID);
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    axios.get(`http://localhost:8080/videos/${video.id}`)
      .then(response => {
        setVideoComments(response.data.comments);
      })
      .catch(error => {
        console.error('Error fetching comments: ', error);
      });
  };

  return (
    <div className="contentsplit">
      <div className="contentsplit__main">
        {selectedVideo && (
          <>
          <div className='video'>
            <Video posterImage={selectedVideo.image} />
          </div>
          <div className='below-video'>
            <div className='description-comments'>
              <Videodescription selectedVideo={selectedVideo} />
              <Commentsection videoData={selectedVideo} comments={videoComments} />
            </div>
            <div className="contentsplit_aside">
              <Aside handleVideoSelect={handleVideoSelect} selectedVideo={selectedVideo} />
            </div>
          </div>
          </>
        )}
      </div>

    </div>
  );
}

export default Main;