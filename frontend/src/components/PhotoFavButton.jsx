import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const handleClick = function() {
    props.updateToFavPhotoIds();
  };

  return (
    <div className="photo-list__fav-icon"  onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={props.selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;