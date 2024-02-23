import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {  
  let photosLiked = Object.values(props.state.likedPhotos).reduce((oneLiked, liked) => {
    return oneLiked || liked;
  }, false);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      <TopicList {...props} /> 
      <FavBadge selected={true} isFavPhotoExist={photosLiked}  />
    </div>
  )
}

export default TopNavigation;