import React from 'react';

const Album = {
  id: '',
  userId: '',
  title: '',
  selectedPhoto: {},
  photos: []
};

const setAlbumProp = (propName, propValue) => {
  Album[propName] = propValue;
};

const clearAlbum = () => {
  for(let prop in Album){
    switch(prop){
    case 'photos':
      Album[prop] = [];
      break;
    case 'selectedPhoto':
      Album[prop] = {};
      break;
    default:
      Album[prop] = '';
    }
  }
};

const AlbumContext = React.createContext(Album);

export default AlbumContext;
export {setAlbumProp};
export {clearAlbum};
export {Album};