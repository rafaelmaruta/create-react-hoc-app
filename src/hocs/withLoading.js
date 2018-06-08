import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

export const withLoading = Component => {
  const WithLoading = ({ data }) =>
    data
      ? <Component data={data} />
      : <img
        alt="logo"
        className="App-logo"
        src={logo}
        style={{ display: 'block', margin: '0 auto' }}
      />

  WithLoading.propTypes = {
    data: PropTypes.bool
  }

  return WithLoading;
};
