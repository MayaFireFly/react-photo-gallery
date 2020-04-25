import React from 'react';
import ReactDOM from 'react-dom';
import Loading from '../components/Loading/Loading';

describe('Loading', () => {
  it('render Loading without crushing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading/>, div);
  });       
});