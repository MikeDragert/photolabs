import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

// home route for the main page functionality
const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation state={props.state} getAllPhotoData={props.getAllPhotoData} getPhotosForTopic={props.getPhotosForTopic} onSearchChange={props.onSearchChange} />
      <PhotoList {...props} />
    </div>
  );
};

export default HomeRoute;
