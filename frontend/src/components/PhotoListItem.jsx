import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

// react component for displaying one photo item
const PhotoListItem = (props) => {
  return (
    <article key={props.photoItem.id} className="photo-list__item" >
      <PhotoFavButton selected={props.selected} updateToFavPhotoIds={props.updateToFavPhotoIds}/>
      <img src={props.photoItem.urls.regular} alt="image" className="photo-list__image" onClick={() => props.setPhotoSelected(props.photoItem.id)}/>
      <div className="photo-list__user-details">
        <img src={props.photoItem.user.profile} alt="profile image" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span >{props.photoItem.user.username}</span>
          <br />
          <span className="photo-list__user-location ">{props.photoItem.location.city}, {props.photoItem.location.country}</span>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
