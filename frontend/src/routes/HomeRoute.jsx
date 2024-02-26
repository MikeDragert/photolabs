import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation state={props.state} getPhotosForTopic={props.getPhotosForTopic} />
      <PhotoList {...props} />
    </div>
  );
};

export default HomeRoute;
