import React, {useEffect, useRef, useState} from 'react';
import pic1 from '../img/Annie.jpg';
import pic2 from '../img/It_was_you.jpg';
import pic3 from '../img/Walking_in_dark.jpg';
import Annie from '../music/Annie.mp3';
import It_was_you from '../music/It_was_you.mp3';
import Walking_in_dark from '../music/Walking_in_dark.mp3';



const AudioPlayer = React.memo(() => {
    const audio = useRef(null);
    const cover = useRef(null);
    const playBtn = useRef(null);
    const progressTitle = useRef(null);
    const progressBar = useRef(null);
    const musicContainer = useRef(null);
    const prev = useRef(null);
    const next = useRef(null);

    const [songs, setSongs] = useState(['Annie', 'It was you', 'Walking in dark']);
    const [images, setImages] = useState([pic1, pic2, pic3]);
    const [records, setRecords] = useState([Annie, It_was_you, Walking_in_dark]);
    let [songIndex, setSongIndex] = useState(2);

    useEffect(() => {
        audio.current.addEventListener('timeupdate', updateProgress);
        audio.current.addEventListener('ended', handleNextSongs);
        // return () => {
        //     console.log(audio.current)
        //     audio.current.removeEventListener('timeupdate', updateProgress);
        // } 
    }, [])

    const updateProgress = () => {
        const duration = audio.current.duration;
        const currentTime = audio.current.currentTime;
        const percentage = (currentTime / duration) * 100;
        // console.log(percentage);
        progressBar.current.style.width = `${percentage}%`;
    }



  
    const setProgress = (e) => {
        const progressWidth = e.target.clientWidth;
        const offsetByClick = e.nativeEvent.offsetX;
        const duration = audio.current.duration;
        audio.current.currentTime = (offsetByClick/progressWidth) * duration;
        // console.log(progressWidth, offsetByClick);

    }

      

    const handlePlayStatus = () => {
        if (!musicContainer.current.classList.contains('play')) {
            playMusic();
        } else {
            pauseMusic();
        }
    }

    const playMusic = () => {
        musicContainer.current.classList.add('play');
        audio.current.play();
        playBtn.current.querySelector('.fas').classList.remove('fa-play');
        playBtn.current.querySelector('.fas').classList.add('fa-pause');
    }

    const pauseMusic = () => {
        musicContainer.current.classList.remove('play');
        audio.current.pause();
        playBtn.current.querySelector('.fas').classList.add('fa-play');
        playBtn.current.querySelector('.fas').classList.remove('fa-pause');
    }

    const handlePrevSongs = () => {
       
        if (songIndex > 0 ) {
            console.log('works')   
            setSongIndex(songIndex - 1); 
        } else {
            setSongIndex(songs.length - 1)
        }
        musicContainer.current.classList.remove('play');
        setTimeout(() => {
            handlePlayStatus()
        }, 500);
    }

    const handleNextSongs = () => {
        if (songIndex >= songs.length - 1) {
            setSongIndex(0);
        } else {
            setSongIndex(songIndex+1);
        }
        musicContainer.current.classList.remove('play');
        setTimeout(() => {
            handlePlayStatus()
        }, 500);
        console.log(songIndex);
    }


    return (
    <div ref={musicContainer} class="music-container">
        <div class="progress-container">
            <h2 ref={progressTitle} class="progress-title">{songs[songIndex]}</h2>
            <div class="progress" onClick={setProgress}>
                <div ref={progressBar} class="progress-bar"></div>
            </div>
        </div>

        <audio ref={audio} src={records[songIndex]} ></audio>

        <div class="img-container">
            <img ref={cover} class="cover" src={images[songIndex]} alt=""/>
        
        </div>

        <div class="navigation">
            <button ref={prev} onClick={handlePrevSongs} class="navButton" id="prev">
                <i class="fas fa-backward fa-2x"></i>
            </button>
            <button ref={playBtn} onClick={handlePlayStatus} class="navButton" id="play">
                <i class="fas fa-play fa-2x"></i>
            </button>
            <button ref={next} onClick={handleNextSongs} class="navButton" id="next">
                <i class="fas fa-forward fa-2x"></i>
            </button>
        </div>
    </div>
    )
})

export default AudioPlayer
