import React, { useState } from 'react';
import './comment-section.scss';
import yourimg from '../../assets/images/images/Mohan-muruge.jpg';

function Commentsection({ videoData }) {
  const [comments, setComments] = useState(videoData.comments || []);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const newCommentObj = {
      id: comments.length + 1,
      name: 'Your Name',
      text: newComment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <p className="comment-section__quantity">{comments.length} comments</p> {/* Display comment count here */}
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
        {comments.map((comment) => (
          <div key={comment.id} className="comments__single-comment">
            <img className="comments__single-comment--img" src={yourimg} alt="User Image" />
            <div className="comments__single-comment--name-date-container">
              <p className="comments__single-comment--name">{comment.name}</p>
              <p className="comments__single-comment--date">{comment.timestamp}</p>
            </div>
            <p className="comments__single-comment--text">{comment.text || comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Commentsection;