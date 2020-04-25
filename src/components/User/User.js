import React, {useState, useEffect} from 'react';
import './User.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const User = (props) => {
  const user = props.user;
  const URL = props.url;
  const [albumsVisible, setAlbumsVisible] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);
  const [liAlbums, setLiAlbums] = useState([]);

  const getAlbums = (userId) => {
    axios.get(URL + 'albums?userId=' + userId).then((response) => {      
      setError(null);
      setAlbums(response.data);
    }).catch((error) => {      
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

  useEffect(
    () => {
      const htmlArray = [];
      albums.map((album, index) => {
        htmlArray.push(
          <li key={index}>
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
      <div className='User__col User__col_w-25 User_clickable' onClick={() => setAlbumsVisible(!albumsVisible) }>albums</div>
    </div>

    
    <div className='User__row User_h-auto'>        
      <ul className='User__col User__col_w-100 User_h-auto'>
        {error ? error : albumsVisible ? liAlbums : ''}
      </ul> 
    </div>     
       

  </div>;
};

User.propTypes = {
  user: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default User;