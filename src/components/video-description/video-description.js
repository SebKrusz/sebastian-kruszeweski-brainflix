import React from 'react';
import './video-description.scss';
import viewsimage from '../../assets/images/Icons/views.svg';
import likesimage from '../../assets/images/Icons/likes.svg';
import videoData from '../../data/video-details.json';

function Videodescription(props) {
    const selectedVideo = props.selectedVideo;
    return (
        <>
            <div className="video-description">
                <h1 className="video-description__title">
                    {selectedVideo.title}
                </h1>
                <div className="video-description__info">
                    <div className="video-description__author-date">
                        <p className="video-description__author-date--author">
                            {selectedVideo.channel}
                        </p>
                        <p className="video-description__author-date--date">
                            {selectedVideo.timestamp}
                        </p>
                    </div>
                    <div className="video-description__numbers">
                        <div className="video-description__numbers__views">
                            <img
                                className="video-description__numbers__views-image"
                                src={viewsimage}
                                alt="Views"
                            />
                            <p className="video-description__numbers__views-text">
                                {selectedVideo.views}
                            </p>
                        </div>
                        <div className="video-description__numbers__likes">
                            <img
                                className="video-description__numbers__likes-image"
                                src={likesimage}
                                alt="Likes"
                            />
                            <p className="video-description__numbers__likes-text">
                                {selectedVideo.likes}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="video-description__description">
                    <p className="video-description__description--text">
                        {selectedVideo.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Videodescription;


// git checkout develop
// git merge create-video-description
// git push (to sync local files with github repo)