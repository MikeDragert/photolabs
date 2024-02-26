import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModel from './routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';
import './styles/HomeRoute.scss'

//create main app react object
const App = () => {  
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, getAllPhotoData, getPhotosForTopic } = useApplicationData();
   
  return (
    <div className="App">
      <HomeRoute state={state} setPhotoSelected={setPhotoSelected} updateToFavPhotoIds={updateToFavPhotoIds} getAllPhotoData={getAllPhotoData} getPhotosForTopic={getPhotosForTopic} />
      {state.photoSelected && <PhotoDetailsModel 
        state={state}
        onClosePhotoDetailsModal={onClosePhotoDetailsModal} 
        updateToFavPhotoIds={updateToFavPhotoIds}
      />}
    </div>
  );
};

export default App;
