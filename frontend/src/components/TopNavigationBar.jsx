import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {  
  let photosLiked = props.photos.reduce((oneLiked, photo) => {
    return oneLiked || photo.liked;
  }, false);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      <TopicList {...props} /> 
      <FavBadge selected={photosLiked} isFavPhotoExist={undefined}  />
    </div>
  )
}

export default TopNavigation;