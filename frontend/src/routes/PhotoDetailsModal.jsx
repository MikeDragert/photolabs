import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = (props) => {
  let displayPhoto = props.photos.find((photo) => {
    return photo.id === props.photoDetailId
  });

  //I'm not sure why, but passing in just the displayPhoto.similar_photos didn't update the liked button on click.
  //  BUT it does if we re-lookup each similar photo from the original photos list
  let similarPhotos = props.photos.filter((photo) => {
    return Object.values(displayPhoto.similar_photos).find((similarPhoto) => {
      return similarPhoto.id === photo.id
    })
  });

  return (
    <article className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.setDisplayModel}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <div className='photo-details-modal__images'>
        <PhotoFavButton selected={displayPhoto.liked} toggleLikedPhoto={() => props.toggleLikedPhoto(displayPhoto.id)}/>
        <img src={displayPhoto.urls.full} alt="image" className='photo-details-modal__image' />
        <div className="photo-details-modal__photographer-details">
          <img src={displayPhoto.user.profile} alt="profile image" className="photo-details-modal__photographer-profile" />
          <div>
            <p className="photo-details-modal__photographer-info">{displayPhoto.user.username}</p>
            <p className="photo-details-modal__photographer-location">{displayPhoto.location.city}, {displayPhoto.location.country}</p>
          </div>
        </div>
        <div className='photo-details-modal__header'>
          <h1>Similar Photos</h1>
        </div>
        <div className='photo-details-modal__images'>
          <PhotoList photos={similarPhotos} toggleLikedPhoto={props.toggleLikedPhoto} />
        </div>
      </div>
    </article>
  )
};

export default PhotoDetailsModal;
