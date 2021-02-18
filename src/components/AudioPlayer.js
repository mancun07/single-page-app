import React from 'react'

const AudioPlayer = () => {
    return (
    <div class="music-container">
        <div class="progress-container">
            <h4 class="progress-title"></h4>
            <div class="progress">
                <div class="progress-bar"></div>
            </div>
        </div>

        <audio src=""></audio>

        <div class="img-container">
            <img class="cover" src="" alt=""/>
        </div>

        <div class="navigation">
            <button class="navButton" id="prev">
                <i class="fas fa-backward"></i>
            </button>
            <button class="navButton" id="play">
                <i class="fas fa-play fa-2x"></i>
            </button>
            <button class="navButton" id="next">
                <i class="fas fa-forward"></i>
            </button>
        </div>
    </div>
    )
}

export default AudioPlayer
