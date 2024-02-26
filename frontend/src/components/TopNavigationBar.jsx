import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss'

//react component for the top navigation bar
const TopNavigation = (props) => {  
  let photosLiked = Object.values(props.state.likedPhotos).reduce((oneLiked, liked) => {
    return oneLiked || liked;
  }, false);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={props.getAllPhotoData}>PhotoLabs</span>
      <TopicList {...props} /> 
      <FavBadge selected={true} isFavPhotoExist={photosLiked}  />
    </div>
  );
};

export default TopNavigation;