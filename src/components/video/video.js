import './video.scss';

function Video({ posterImage }) {
  return (
    <>
      <div>
        <video className="current-video" controls poster={posterImage}>
          <source src="./" type="video/ogg"></source>
        </video>
      </div>
    </>
  );
}

export default Video;