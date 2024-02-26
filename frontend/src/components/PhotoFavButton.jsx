import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

// fav button for one photo
function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon"  onClick={props.updateToFavPhotoIds}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={props.selected}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;