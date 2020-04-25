import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

describe('ErrorMessage', () => {
  it('render ErrorMessage without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ErrorMessage text='TEST'/>, div);
  });       
});