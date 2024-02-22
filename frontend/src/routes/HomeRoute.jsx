import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import photos from '../mocks/photos';
import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';


const HomeRoute = () => {
  const initialPhotos = [...photos];
  
  const [photosData, setPhotosData] = useState(initialPhotos);

  const toggleLikedPhoto = function(id) {
    let newPhotosData = photosData.map((photo) => {
       photo.liked = photo.id === id 
        ? !photo.liked : 
        photo.liked;
       return photo;
    })
    setPhotosData(newPhotosData);
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} photos={photosData}/>
      <PhotoList photos={photosData} toggleLikedPhoto={toggleLikedPhoto}/>
    </div>
  );
};

export default HomeRoute;
