import { useReducer, useEffect } from 'react';

const ACTIONS = {
  UPDATEFAVPHOTOS: "UpdateFavPhotos", 
  SETPHOTOSELECTED: "SetPhotoSelected",
  SETPHOTODATA: "SetPhotoData",
  SETTOPICDATA: "SetTopicData",
  UPDATESEARCH: "UpdateSearch",
  CLEARSEARCH: "ClearSearch",
  CLEARSEARCHBLOCK: "ClearSearchBlock"
};

//main application funcitonality
const useApplicationData = () => {  
  const initialState = {
    likedPhotos: {},
    photoSelected: undefined,
    photoData: [],
    topicData: [],
    searchString: '',
    blockSearchRefresh: false
  };

  //state reducer for managing data
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
      case ACTIONS.UPDATESEARCH:
        newState.searchString = action.value;
        return newState;
      case ACTIONS.CLEARSEARCH:
        newState.searchString = '';
        newState.blockSearchRefresh = true;
        return newState;
      case ACTIONS.CLEARSEARCHBLOCK:
        newState.blockSearchRefresh = false;
        return newState;
      default:
        return newState;
      }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //toggle favourite for given photo id
  const updateToFavPhotoIds = function(id) {
    dispatch({type: ACTIONS.UPDATEFAVPHOTOS, value: id});
  }

  //select photo by id to show detailed view
  const setPhotoSelected = function(photoDetailsId) {
    dispatch({type: ACTIONS.SETPHOTOSELECTED, value: photoDetailsId});
  }
  
  //unselect the selected photo to close the detailed view
  const onClosePhotoDetailsModal = function() {
    dispatch({type: ACTIONS.SETPHOTOSELECTED, value: undefined});
  }

  const onSearchChange = function(newSearch) {
    dispatch({type: ACTIONS.UPDATESEARCH, value: newSearch});
  }

  const checkPhotoData = function(data) {
    if (data) {
      return data;
    } else {
      return [];
    }
  }

  //get ALL photo data
  const getAllPhotoData = function () {
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: ACTIONS.CLEARSEARCH});
        return dispatch({type: ACTIONS.SETPHOTODATA, value: checkPhotoData(data)});
      })
      .catch((error) =>  {
        console.log(error);
      });
  };

  //get photo data for specified topic id
  const getPhotosForTopic = function(topicId) {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type: ACTIONS.CLEARSEARCH});
        return dispatch({type: ACTIONS.SETPHOTODATA, value: checkPhotoData(data)});
      })
      .catch((error) =>  {
        console.log(error);
      });
  };

  const getPhotosForSearch = function() {
    fetch(`/api/photos/${state.searchString}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
      dispatch({type: ACTIONS.SETPHOTODATA, value: checkPhotoData(data)})}
      )
      .catch((error) =>  {
        console.log(error);
      });
  };
   
  //get all photo data after render
  useEffect(() => {
    getAllPhotoData();
  }, []);

  //get all topic data after render
  useEffect(() => {
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({type: ACTIONS.SETTOPICDATA, value: data}))
      .catch((error) =>  {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    if (state.blockSearchRefresh) {
      dispatch({type: ACTIONS.CLEARSEARCHBLOCK});
    } else {
      const searchWait = setTimeout(() => {
        if (state.searchString.length > 0) {
          getPhotosForSearch();
        } else {
          getAllPhotoData();
        }
      }, 1000);

      return () => clearTimeout(searchWait);
    }
  }, [state.searchString]);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    onSearchChange,
    getAllPhotoData,
    getPhotosForTopic
  };
};

export default useApplicationData;
