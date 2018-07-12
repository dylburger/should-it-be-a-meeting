import React from 'react';

import gaUserClickedLink from './ga/gaUserClickedLink';

export default () => (
  <div className="main-footer">
    <div id="footer">
      <a
        href="https://assets.ratethatmeeting.com/assets/should-it-be-a-meeting-flowchart.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => gaUserClickedLink('User clicked Download Flowchart')}>
        Download the flowchart
      </a>
    </div>
  </div>
);
