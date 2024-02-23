import { useState } from 'react';
import photos from '../mocks/photos';

// Note: Rendering a single component to build components in isolation
const useApplicationData = () => {  

  const initialPhotos = [...photos];

  const initialState = {
    photos: [...photos],
    likedPhotos: {},
    photoSelected: undefined
  }
  const [state, setState] = useState(initialState);

  const updateToFavPhotoIds = function(id) {
    let newLikedPhotos = {...state.likedPhotos};
    newLikedPhotos[id] = newLikedPhotos[id] ? false : true;
    let newState= {...state, likedPhotos: newLikedPhotos};
    setState(newState);
  }

  const setPhotoSelected = function(photoDetailsId) {
    if (photoDetailsId) {      
      let newState = {...state, photoSelected: photoDetailsId};
      setState(newState);
    }
  }

  const onClosePhotoDetailsModal = function() {
    let newState = {...state, photoSelected: undefined};
    setState(newState);
  }
   
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
};

export default useApplicationData;
