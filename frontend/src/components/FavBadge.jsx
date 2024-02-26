import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//favourite badge for the navigation bar
const FavBadge = ({ isFavPhotoExist, selected }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={selected} />
    </div>
  );
};

export default FavBadge;