import React, {useContext, useEffect} from 'react';
import './AlbumPopup.css';
import PropTypes from 'prop-types';
import AlbumContext, {setAlbumProp} from '../../AlbumContext';

const AlbumPopup = (props) => {
  const setPopupVisible = props.setPopupVisible;
  const album = useContext(AlbumContext);
  const setPhotoPopupVisible = props.setPhotoPopupVisible;

  const setPopup = (photo) => {
    setPhotoPopupVisible(false);    
    setAlbumProp('selectedPhoto', photo);
    setTimeout(() => {
      setPhotoPopupVisible(true);
    }, 10);
  };

  useEffect(
    () => {
      setPhotoPopupVisible(false);
    }, 
    []
  );

  return <div className='Album-popup'>

    <div className='Album-popup__header'> 
      <h4>{album.title}</h4>     
      <div onClick={() => setPopupVisible(false) }>
        <img src='./img/close.svg' alt='X' className='Album-popup__close'/>
      </div>      
    </div>

    <div className='Album-popup__content'>
      {album.photos.map((photo, index) => (
        <div key={index} onClick={() => setPopup(photo) }>          
          <img src={photo.thumbnailUrl} alt={photo.title} className='Album-popup__image'/>
        </div>        
      ))}      
    </div>

  </div>;
};

AlbumPopup.propTypes = {
  setPopupVisible: PropTypes.func.isRequired,
  setPhotoPopupVisible: PropTypes.func.isRequired
};

export default AlbumPopup;