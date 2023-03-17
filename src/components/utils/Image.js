/* eslint-disable react/prop-types */
import React from 'react';

function Image({ image, alt }) {
  return (
    <img src={ image } alt={ alt } />
  );
}

export default Image;
