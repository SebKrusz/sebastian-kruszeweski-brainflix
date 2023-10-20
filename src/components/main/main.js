import React, { useState } from 'react';
import Videodescription from '../video-description/video-description';
import Commentsection from '../comment-section/comment-section';
import Aside from '../aside/aside';
import videoDetails from '../../data/video-details.json';
import './main.scss'

function Main() {

    const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    };
    
    return (
        <>
            <div className='contentsplit'>
                <div className='contentsplit__main'>
                    <Videodescription
                    selectedVideo={selectedVideo}/>
                    <Commentsection videoData={selectedVideo} />
                </div>
                <div className='contentsplit_aside'>
                    <Aside handleVideoSelect={handleVideoSelect} selectedVideo={selectedVideo} />
                </div> 
            </div>
        </>
    )
}

export default Main