import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = (props) => {
  return <header className='Header'>
    <h2>{props.text}</h2>
  </header>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;