import React from 'react';
import ReactDOM from 'react-dom';
import AlbumPopup from '../components/AlbumPopup/AlbumPopup';

describe('AlbumPopup', () => {
  const setPopupVisible = () => {
    console.log('setPopupVisible in test AlbumPopup');
  };
  it('render AlbumPopup without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AlbumPopup setPopupVisible={setPopupVisible}/>, div);
  });       
});