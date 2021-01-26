import React, {useContext, useEffect} from 'react'
import VideoContext from '../context/video/VideoContext'
import VideoItem from './VideoItem'

const Video = () => {
    const {video} = useContext(VideoContext)
             useEffect(() => {
             document.querySelector('body').classList.remove('news-page');
             document.querySelector('.navbar-wrapper').classList.remove('navbar-wrapper__about-us');
    }, [])
    return (
            <main className="video-page__main">
    <div className="container">
        <div className="video-wrapper">
            <h1>Видео с концертов</h1>
            {video.map(item => {
                return <VideoItem key={item.id} item={item}/>
            })}

        </div>    
    </div>
</main>

    )
}

export default Video
