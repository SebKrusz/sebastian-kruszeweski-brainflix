import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './upload.scss';
import thumbnail from '../../assets/images/images/upload.jpg';

function Upload() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handlePublish = () => {
        const newVideo = {
            id: uuidv4(),
            title: title,
            description: description,
        };

        axios.post('http://localhost:8080/videos/', newVideo)
            .then(response => {
                console.log('Video uploaded:', response.data);
                window.alert('Video published successfully!');
            })
            .catch(error => {
                console.error('Error uploading video:', error);
            });
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    return (
        <div className="upload__container">
            <h1 className='upload__header'> Upload Video</h1>
            <div className='upload__main'>
                <div className='upload__thumbnail-container'>
                    <p className='upload__thumbnail-text'>VIDEO THUMBNAIL</p>
                    <img className='upload__thumbnail-img' src={thumbnail} alt="Thumbnail" />
                </div>
                <div className='upload__forms-container'>
                    <form className='upload__title-form-container'>
                        <label className='upload__title-form-label' htmlFor="title">TITLE YOUR VIDEO</label>
                        <textarea
                            className='upload__title-form-input'
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Add a title to your video"
                            value={title}
                            onChange={handleTitleChange}
                        ></textarea>
                    </form>
                    <form className='upload__description-form-container'>
                        <label className='upload__description-form-label' htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                        <textarea
                            className='upload__description-form-input'
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Add a description to your video"
                            value={description}
                            onChange={handleDescriptionChange}
                        ></textarea>
                    </form>
                </div>
            </div>
            <div className='upload__button-container'>
                <Link to="/" className='upload__publish-button' onClick={handlePublish}>PUBLISH</Link>
                <Link to="/" className='upload__cancel-button'>CANCEL</Link>
            </div>
        </div>
    );
}

export default Upload;
