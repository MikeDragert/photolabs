import { useReducer, useEffect } from 'react';


const ACTIONS = {
  UPDATEFAVPHOTOS: "UpdateFavPhotos", 
  SETPHOTOSELECTED: "SetPhotoSelected",
  SETPHOTODATA: "SetPhotoData",
  SETTOPICDATA: "SetTopicData"
}

// Note: Rendering a single component to build components in isolation
const useApplicationData = () => {  

  const initialState = {
    likedPhotos: {},
    photoSelected: undefined,
    photoData: [],
    topicData: []
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
      case ACTIONS.SETPHOTODATA:
        newState.photoData = action.value;
        return newState;
      case ACTIONS.SETTOPICDATA:
        newState.topicData = action.value;
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
   
  useEffect(() => {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({type: ACTIONS.SETPHOTODATA, value: data}))
      .catch((error) =>  {
        console.log(error);
      })
  }, [])

  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({type: ACTIONS.SETTOPICDATA, value: data}))
      .catch((error) =>  {
        console.log(error);
      })
  }, [])

  const getPhotosForTopic = function(topicId) {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({type: ACTIONS.SETPHOTODATA, value: data}))
      .catch((error) =>  {
        console.log(error);
      })
  }

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosForTopic
  }
};

export default useApplicationData;
