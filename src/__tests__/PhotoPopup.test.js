import React from 'react';
import ReactDOM from 'react-dom';
import PhotoPopup from '../components/PhotoPopup/PhotoPopup';

describe('PhotoPopup', () => {
  const setPopupVisible = () => {
    console.log('setPopupVisible in PhotoPopup test');
  };
  it('render PhotoPopup without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoPopup setPopupVisible={setPopupVisible}/>, div);
  });       
});