import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  console.log(props);
  return (
    <article key={props.photoItem.id}>
      <img src={props.photoItem.imageSource} alt="image" />
      <img src={props.photoItem.profile} alt="profile image" />
      <p>{props.photoItem.username}</p>
      <p>{props.photoItem.location.city}, {props.photoItem.location.country}</p>
  </article>
  );
};

export default PhotoListItem;
