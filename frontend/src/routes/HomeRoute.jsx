import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';
import PhotoDetailsModel from './PhotoDetailsModal';

import photos from '../mocks/photos';
import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';


const HomeRoute = () => {
  const initialPhotos = [...photos];
  
  const [photosData, setPhotosData] = useState(initialPhotos);
  const [photoDetails, setPhotoDetails] = useState(false);

  const toggleLikedPhoto = function(id) {
    let newPhotosData = photosData.map((photo) => {
       photo.liked = photo.id === id 
        ? !photo.liked : 
        photo.liked;
       return photo;
    })
    setPhotosData(newPhotosData);
  }

  const showPhotoDetails = function(photoId) {
    if (photoId) {
      setPhotoDetails(true);
    } else {
      setPhotoDetails(false);
    }
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} photos={photosData}/>
      <PhotoList photos={photosData} toggleLikedPhoto={toggleLikedPhoto} showPhotoDetails={showPhotoDetails}/>
      {photoDetails && <PhotoDetailsModel showPhotoDetails={() => showPhotoDetails()}/>}
    </div>
  );
};

export default HomeRoute;
