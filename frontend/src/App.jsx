import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModel from './routes/PhotoDetailsModal';
import photos from './mocks/photos';

import './App.scss';
import './styles/HomeRoute.scss'

// Note: Rendering a single component to build components in isolation
const App = () => {  

  const initialPhotos = [...photos];

  const [photosData, setPhotosData] = useState(initialPhotos);
  const [likedPhotos, setLikedPhotos] = useState({});

  const toggleLikedPhoto = function(id) {
    let newLikedPhotos = {...likedPhotos};
    newLikedPhotos[id] = newLikedPhotos[id] ? false : true;
    setLikedPhotos(newLikedPhotos);
  }

  const intitialState = {empty: true};
  const [displayPhotoDetails, setDisplayPhotoDetails] = useState(intitialState);
  const setDisplayModel = function(photoDetailsId) {
    if (photoDetailsId) {
      setDisplayPhotoDetails({empty: false, photoDetailsId: photoDetailsId});
    } else {
      setDisplayPhotoDetails(intitialState);
    }
  }
   
  return (
    <div className="App">
      <HomeRoute setDisplayModel={setDisplayModel} photos={photosData} toggleLikedPhoto={toggleLikedPhoto} likedPhotos={likedPhotos} />
      {!displayPhotoDetails.empty && <PhotoDetailsModel 
        photos={photosData}
        photoDetailId={displayPhotoDetails.photoDetailsId} 
        likedPhotos={likedPhotos}
        setDisplayModel={() => setDisplayModel()} 
        toggleLikedPhoto={toggleLikedPhoto}
      />}
    </div>
  );
};

export default App;
