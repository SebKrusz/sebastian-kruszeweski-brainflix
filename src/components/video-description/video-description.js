import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './video-description.scss';
import viewsimage from '../../assets/images/Icons/views.svg';
import likesimage from '../../assets/images/Icons/likes.svg';
import { useParams } from 'react-router-dom';

const formatUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
};

function Videodescription() {
    const [videoData, setVideoData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchVideoData = async (videoID) => {
            try {
                const response = await axios.get(`http://localhost:8080/videos/${videoID}`);
                setVideoData(response.data);
            } catch (error) {
                console.error('Error fetching video data: ', error);
            }
        };

        if (id) {
            fetchVideoData(id);
        } else {
            const defaultID = '84e96018-4022-434e-80bf-000ce4cd12b8';
            fetchVideoData(defaultID);
        }
    }, [id]);

    if (!videoData) {
        return <p>Loading...</p>;
    }

    const formattedDate = formatUnixTimestamp(videoData.timestamp);

    return (
        <div className="video-description">
            <h1 className="video-description__title">
                {videoData.title}
            </h1>
            <div className="video-description__info">
                <div className="video-description__author-date">
                    <p className="video-description__author-date--author">
                        {videoData.channel}
                    </p>
                    <p className="video-description__author-date--date">
                        {formattedDate}
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
                            {videoData.views}
                        </p>
                    </div>
                    <div className="video-description__numbers__likes">
                        <img
                            className="video-description__numbers__likes-image"
                            src={likesimage}
                            alt="Likes"
                        />
                        <p className="video-description__numbers__likes-text">
                            {videoData.likes}
                        </p>
                    </div>
                </div>
            </div>
            <div className="video-description__description">
                <p className="video-description__description--text">
                    {videoData.description}
                </p>
            </div>
        </div>
    );
}

export default Videodescription;