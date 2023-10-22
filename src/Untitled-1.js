
import videoData from "../../data/videos.json"
import VideoCard from "../VideoCard/VideoCard"
import './Videobar.scss'
const Videobar = () => {
    return (
        <>
            <div className='videobar'>
                <h2 className='videobar__title'>Next Videos</h2>
                {videoData.map(data => {
                    return (
                        <VideoCard
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            channel={data.channel}
                            image={data.image}
                        />)
                })}
            </div>
        </>
    )
}



import './VideoCard.scss'
const VideoCard = ({ id, title, channel, image }) => {
    return (
        < div className='videobar__card' >
            <div >
                <img className='videobar__thumbnail'
                    src={image}
                ></img>
            </div>
            <div className='videobar__text'>
                <h3 className='videobar__text--title'>
                    {title}
                </h3>
                <span className='videobar__text--author'>
                    {channel}
                </span>
            </div>
        </div >
    )
}
export default VideoCard