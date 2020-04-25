import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import AlbumContext, {Album} from './AlbumContext';

ReactDOM.render(
  <AlbumContext.Provider value={Album}>
    <App/>
  </AlbumContext.Provider>, 
  document.getElementById('root')
);

module.hot.accept();		//development mode only