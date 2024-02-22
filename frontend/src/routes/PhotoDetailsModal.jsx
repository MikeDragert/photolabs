import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  return (
    <article className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.setDisplayModel}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className='photo-details-modal__images'>
        <PhotoFavButton selected={props.photoDetails.selected} toggleLikedPhoto={props.photoDetails.toggleLikedPhoto}/>
        <img src={props.photoDetails.urls.full} alt="image" className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details">
          <img src={props.photoDetails.user.profile} alt="profile image" className="photo-details-modal__photographer-profile" />
          <div>
            <p className="photo-details-modal__photographer-info">{props.photoDetails.user.username}</p>
            <p className="photo-details-modal__photographer-location">{props.photoDetails.location.city}, {props.photoDetails.location.country}</p>
          </div>
        </div>
        <div className='photo-details-modal__header'>
          <h1>Similar Photos</h1>
        </div>
        <div className='photo-details-modal__images'>
          <PhotoList photos={Object.values(props.photoDetails.similar_photos)}  />
        </div>
      </div>
    </article>
  )
};

export default PhotoDetailsModal;
