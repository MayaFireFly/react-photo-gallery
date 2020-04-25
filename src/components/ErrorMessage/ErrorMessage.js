import React from 'react';
import './ErrorMessage.css';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  return <div className='ErrorMessage'>
    <h4>{props.text}</h4>
  </div>;
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired
};

export default ErrorMessage;