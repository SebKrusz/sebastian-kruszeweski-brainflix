import React, { useState } from 'react';
import './comment-section.scss';
import yourimg from '../../assets/images/images/Mohan-muruge.jpg';

function Commentsection({ videoData }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const newCommentObj = {
      id: videoData.comments.length + 1,
      name: 'Your Name',
      text: newComment,
      timestamp: new Date().getTime(),
    };

    videoData.comments.push(newCommentObj);
    setNewComment('');
  };

  const formatUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="comment-section">
      <p className="comment-section__quantity">{videoData.comments.length} comments</p>
      <h2 className="comment-section__header">Join The Conversation</h2>
      <form className="comment-section__my-form" onSubmit={handleSubmitComment}>
        <img className="comment-section__your-img" src={yourimg} alt="User Image" />
        <div className="comment-section__user-comment">
          <textarea
            type="text"
            name="comment"
            value={newComment}
            onChange={handleCommentChange}
            className="comment-section__your-comment"
            id="yourComment"
            placeholder="Add a new comment"
          />
        </div>
        <div className="comment-section__button">
          <button type="submit" className="comment-section__button--clickable" id="add-comment">
            COMMENT
          </button>
        </div>
      </form>
      <div className="comments-container">
        {videoData.comments.map((comment) => (
          <div key={comment.id} className="comments__single-comment">
            <img className="comments__single-comment--img" src={yourimg} alt="User Image" />
            <div className="comments__single-comment--name-date-container">
              <p className="comments__single-comment--name">{comment.name}</p>
              <p className="comments__single-comment--date">{formatUnixTimestamp(comment.timestamp)}</p>
            </div>
            <p className="comments__single-comment--text">{comment.text || comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Commentsection;