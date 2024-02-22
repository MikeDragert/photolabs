import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoList = props.photos.map((photo) => {
    return <PhotoListItem photoItem = {{
      id: photo.id,
      username: photo.user.username,
      location: photo.location,
      imageSource: photo.urls.regular,
      profile: photo.user.profile
    }} key={photo.id} toggleLikedPhoto={() => props.toggleLikedPhoto(photo.id)} selected={photo.liked} showPhotoDetails={props.showPhotoDetails}/>
  }); 
  
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
