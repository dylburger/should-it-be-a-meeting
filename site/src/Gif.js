import {string} from 'prop-types';
import React from 'react';

const Gif = ({ gifUrl, gifAlt }) => (
  <div className="gif">
    <img src={gifUrl} alt={gifAlt} />
  </div>
);

Gif.propTypes = {
  gifUrl: string.isRequired,
  gifAlt: string.isRequired,
};

export default Gif;