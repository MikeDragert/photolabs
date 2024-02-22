import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = function() {
    setSelected((prevSelected) => {
      return !prevSelected;
    })
  };

  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected}/>
    </div>
  );
};

export default FavBadge;