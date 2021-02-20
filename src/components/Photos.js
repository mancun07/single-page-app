import React, {useContext, useEffect} from 'react'
import PhotosContext from '../context/photos/PhotosContext'
import PhotoItem from './PhotoItem'

const Photos = () => {
    const {photos} = useContext(PhotosContext)
    //      useEffect(() => {
    //     document.querySelector('body').classList.remove('news-page');

    // }, [])
    return (
<main className="photo-page__main">
    <div className="container">
        <div className="photos-wrapper">
            <div className="photos">
            {photos.map(photo => {
                return <PhotoItem key={photo.id} photo={photo} />
            })}
               
            </div>
        </div>  
    </div>
</main>
    )
}

export default Photos
