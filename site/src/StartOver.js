import React from 'react';
import {Link} from 'react-router-dom';

import gaUserClickedStartOver from './ga/gaUserClickedStartOver';

export default () => (
  <div id="start-over">
    <Link
      to="/"
	  onClick={() =>
	    gaUserClickedStartOver()}
    >
      <span id="start-over-link">Start over</span>
    </Link>
  </div>
);