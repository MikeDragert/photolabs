import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <article key={props.photoItem.id} className="photo-list__item">
      <img src={props.photoItem.imageSource} alt="image" className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.photoItem.profile} alt="profile image" className="photo-list__user-profile" />
        <div>
          <p className="photo-list__user-info">{props.photoItem.username}</p>
          <p className="photo-list__user-location ">{props.photoItem.location.city}, {props.photoItem.location.country}</p>
        </div>
      </div>
  </article>
  );
};

export default PhotoListItem;
