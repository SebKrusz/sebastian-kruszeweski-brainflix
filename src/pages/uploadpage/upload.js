import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './upload.scss';
import thumbnail from '../../assets/images/images/upload.jpg';

function Upload() {
    const [isPublished, setIsPublished] = useState(false);
    const [isCancel, setIsCancel] = useState(false);

    const handlePublish = () => {
        window.alert('The video was uploaded.');
        setIsPublished(true);
    };

    const handleCancel = () => {
        window.alert('The video uploading was Cancelled.');
        setIsCancel(true);
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
                        ></textarea>
                    </form>
                </div>
            </div>
            <div className='upload__button-container'>
                <Link to="/" className='upload__publish-button' onClick={handlePublish}>PUBLISH</Link>
                <Link to="/" className='upload__cancel-button' onClick={handleCancel}>CANCEL</Link>
            </div>
        </div>
    );
}

export default Upload;
