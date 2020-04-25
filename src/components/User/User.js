import React, {useState, useEffect} from 'react';
import './User.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import {setAlbumProp, clearAlbum} from '../../AlbumContext';

const User = (props) => {
  const user = props.user;
  const URL = props.url;
  const setPopupVisible = props.setPopupVisible;
  const [albumsVisible, setAlbumsVisible] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [liAlbums, setLiAlbums] = useState([]);

  const getAlbums = (userId) => {
    document.getElementById('root').classList.add('User_cursor-progress');
    axios.get(URL + 'albums?userId=' + userId).then((response) => {      
      setError(null);
      setAlbums(response.data);
      document.getElementById('root').classList.remove('User_cursor-progress');
    }).catch((error) => {
      document.getElementById('root').classList.remove('User_cursor-progress');      
      setAlbums([]);
      if(error.response){
        setError('Error receiving albums of user'); 
      }else if(error.request){
        setError('Error requesting albums of user');
      }else{
        setError(error.message);
      }
    });
  };

  useEffect(
    () => {
      getAlbums(user.id);
    }, 
    []
  );

  const getPhotos = (album) => {
    setPopupVisible(false);
    clearAlbum();
    document.getElementById('root').classList.add('User_cursor-progress');
    axios.get(URL + 'photos?albumId=' + album.id).then((response) => {      
      setAlbumProp('id', album.id);
      setAlbumProp('userId', album.userId);
      setAlbumProp('title', album.title);
      setAlbumProp('photos', response.data);
      setTimeout(() => {
        setError(null);
        setPopupVisible(true);
        document.getElementById('root').classList.remove('User_cursor-progress');
      }, 10);                  
    }).catch((error) => { 
      document.getElementById('root').classList.remove('User_cursor-progress');    
      if(error.response){
        setError('Error receiving photos of album'); 
      }else if(error.request){
        setError('Error requesting photos of album');
      }else{
        setError(error.message);
      }
    });
  };  

  useEffect(
    () => {
      const htmlArray = [];
      albums.map((album, index) => {
        htmlArray.push(
          <li key={index} className='User_clickable' onClick={() => getPhotos(album) }>
            {album.title}
          </li>
        );
      });
      setLiAlbums(htmlArray);
    }, 
    [albums]
  );

  return <div className='User User__col User__col_w-100'>
    <div className='User__row User_h-2'>
      <div className='User__col User__col_w-25'>{user.username}</div>
      <div className='User__col User__col_w-25'>{user.name}</div>
      <div className='User__col User__col_w-25'>{user.email}</div>
      <div className='User__col User__col_w-25 User_clickable User_font-bold' onClick={() => setAlbumsVisible(!albumsVisible) }>albums</div>
    </div>

    
    {error ? (
      <div className='User__row User_h-auto'>        
        <ul className='User__col User__col_w-100 User_h-auto'>
          {error}
        </ul> 
      </div> 
    ) : albumsVisible ? (
      <div className='User__row User_h-auto'>        
        <ul className='User__col User__col_w-100 User_h-auto'>
          {liAlbums}
        </ul> 
      </div> 
    ) : ''}
        
       

  </div>;
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  setPopupVisible: PropTypes.func.isRequired
};

export default User;