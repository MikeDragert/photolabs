import { useReducer, useState } from 'react';
import photos from '../mocks/photos';

// Note: Rendering a single component to build components in isolation
const useApplicationData = () => {  

  const initialPhotos = [...photos];

  const initialState = {
    photos: [...photos],
    likedPhotos: {},
    photoSelected: undefined
  }

  const reducer = function(state, action) {
    let newState = {...state};
    switch (action.type) {
      case "UpdateFavPhotos":
        let newLikedPhotos = {...state.likedPhotos};
        newLikedPhotos[action.value] = newLikedPhotos[action.value] ? false : true;
        newState.likedPhotos = newLikedPhotos;
        return newState;
      case "SetPhotoSelected":
        newState.photoSelected = action.value;
        return newState;
      default:
        return newState;
      }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateToFavPhotoIds = function(id) {
    dispatch({type: "UpdateFavPhotos", value: id});
  }

  const setPhotoSelected = function(photoDetailsId) {
    dispatch({type: "SetPhotoSelected", value: photoDetailsId})
  }
  
  const onClosePhotoDetailsModal = function() {
    dispatch({type: "SetPhotoSelected", value: undefined})
  }
   
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
};

export default useApplicationData;
