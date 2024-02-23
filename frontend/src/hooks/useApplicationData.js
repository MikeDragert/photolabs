import { useReducer, useState } from 'react';
import photos from '../mocks/photos';

const ACTIONS = {
  UPDATEFAVPHOTOS: "UpdateFavPhotos", 
  SETPHOTOSELECTED: "SetPhotoSelected"
}

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
      case ACTIONS.UPDATEFAVPHOTOS:
        let newLikedPhotos = {...state.likedPhotos};
        newLikedPhotos[action.value] = newLikedPhotos[action.value] ? false : true;
        newState.likedPhotos = newLikedPhotos;
        return newState;
      case ACTIONS.SETPHOTOSELECTED:
        newState.photoSelected = action.value;
        return newState;
      default:
        return newState;
      }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateToFavPhotoIds = function(id) {
    dispatch({type: ACTIONS.UPDATEFAVPHOTOS, value: id});
  }

  const setPhotoSelected = function(photoDetailsId) {
    dispatch({type: ACTIONS.SETPHOTOSELECTED, value: photoDetailsId})
  }
  
  const onClosePhotoDetailsModal = function() {
    dispatch({type: ACTIONS.SETPHOTOSELECTED, value: undefined})
  }
   
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  }
};

export default useApplicationData;
