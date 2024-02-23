import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  let displayPhoto = props.state.photos.find((photo) => {
    return photo.id === props.state.photoSelected
  });

  return (
    <article className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className='photo-details-modal__images'>
        <PhotoFavButton selected={props.state.likedPhotos[displayPhoto.id]} updateToFavPhotoIds={() => props.updateToFavPhotoIds(displayPhoto.id)}/>
        <img src={displayPhoto.urls.full} alt="image" className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details">
          <img src={displayPhoto.user.profile} alt="profile image" className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <span>{displayPhoto.user.username}</span>
            <br />
            <span className="photo-details-modal__photographer-location">{displayPhoto.location.city}, {displayPhoto.location.country}</span>
          </div>
        </div>
        <div className='photo-details-modal__header'>
          <h1>Similar Photos</h1>
        </div>
        <div className='photo-details-modal__images'>
          <PhotoList state={props.state} updateToFavPhotoIds={props.updateToFavPhotoIds} setPhotoSelected={() => {}} />
        </div>
      </div>
    </article>
  )
};

export default PhotoDetailsModal;
