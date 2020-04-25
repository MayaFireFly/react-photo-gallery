import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import User from '../components/User/User';

describe('User', () => {
  const user = {
    username: 'username',
    name: 'name',
    email: 'email',
    id: 1
  };
  const setPopupVisible = () => {
    console.log('setPopupVisible in User test');
  };
  it('render User without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<User user={user} url='testurl' setPopupVisible={setPopupVisible}/>, div);
  });       
});