import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photoList = props.state.photoData.map((photo) => {
    return <PhotoListItem photoItem = {photo} key={photo.id} updateToFavPhotoIds={() => props.updateToFavPhotoIds(photo.id)} selected={props.state.likedPhotos[photo.id]} setPhotoSelected={props.setPhotoSelected}/>
  }); 
  
  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
