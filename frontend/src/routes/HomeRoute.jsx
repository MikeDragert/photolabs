import React, {useState} from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import topics from '../mocks/topics';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} photos={props.photos}/>
      <PhotoList {...props} />
    </div>
  );
};

export default HomeRoute;
