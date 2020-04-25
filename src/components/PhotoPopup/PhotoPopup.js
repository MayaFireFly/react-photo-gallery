import React, {useContext} from 'react';
import './PhotoPopup.css';
import PropTypes from 'prop-types';
import AlbumContext from '../../AlbumContext';

const PhotoPopup = (props) => {
  const album = useContext(AlbumContext);
  const setPopupVisible = props.setPopupVisible;

  return <div className='Photo-popup'>
    <div className='Photo-popup__header'>
      <div onClick={() => setPopupVisible(false) }>        
        <img src='./img/close_blue.svg' alt='X' className='Photo-popup__close'/>
      </div> 
    </div>
    <div className='Photo-popup__content'>
      <img src={album.selectedPhoto.url} alt={album.selectedPhoto.title}/>
    </div>    
  </div>;
};

PhotoPopup.propTypes = {
  setPopupVisible: PropTypes.func.isRequired
};

export default PhotoPopup;