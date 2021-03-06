import React from 'react';

import gaUserClickedLink from './ga/gaUserClickedLink';

export default () => (
  <div className="main-footer">
    <div id="footer">
      <a
        href="https://drive.google.com/file/d/1Eyzu-F3DKL_QfQB4HyIEOuRSlYzVnLR8/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => gaUserClickedLink('User clicked Download Flowchart')}>
        Download the flowchart
      </a>
      <br />
      <br />
      <span>Made with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {' '}by{' '}
        <a
          href="https://dylburger.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gaUserClickedLink('User clicked link for Dylan')}>
          Dylan
        </a>
        {' '}and{' '}
        <a
          href="https://dannyroosevelt.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gaUserClickedLink('User clicked link for Danny')}>
          Danny
        </a>
      </span>
      <br />
    </div>
  </div>
);
