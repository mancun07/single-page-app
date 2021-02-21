import React from 'react'
import {motion} from 'framer-motion'

const VideoItem = ({item}) => {
    return (
            <div className="video-item">
                <motion.h1
                    initial={{x: '100vw'}}
                    animate={{x: 0}}
                    transition={{delay: 0.5, type: 'spring', stiffness: 300}}
                >{item.title}</motion.h1>
                <motion.h3
                    initial={{x: '100vw'}}
                    animate={{x: 0}}
                    transition={{delay: 0.5, type: 'spring', stiffness: 300}}
                >{item.date}</motion.h3>
                <motion.h3
                    initial={{x: '100vw'}}
                    animate={{x: 0}}
                    transition={{delay: 0.5, type: 'spring', stiffness: 300}}
                >{item.venue}</motion.h3>
                <div className="video-item__video">
                    <iframe width="789" height="444" src={item.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
            </div>
    )
}

export default VideoItem
