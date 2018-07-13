import {Col, Row} from 'antd';
import React from 'react';

import Gif from './Gif';
import Grid from './Grid';
import SocialButtonsRow from './SocialButtonsRow';

export default () => (
  <Grid>
    <p className="answer">
      Good news - you should <em>not</em> schedule a meeting{' '}
      <span role="img" aria-label="Party popper">
        🎉
      </span>
    </p>
    <Row
      gutter={8}
      type="flex"
      justify="space-around"
      align="middle"
      className="end-node">
      <Col xs={{span: 24}} sm={{span: 20}} md={{span: 16}} lg={{span: 14}}>
        <div className="main-card">
          <h2>You&rsquo;ve got plenty of other options</h2>
          <ul>
            <li>Send an email or IM</li>
            <li>Have a brief phone call</li>
            <li>
              Walk to your coworker&rsquo;s desk and quickly discuss in person
            </li>
          </ul>
          <Gif
            gifUrl="/assets/gifs/the-office-jim-excited.gif"
            gifAlt="Hooray!"
          />
        </div>
        <SocialButtonsRow />
      </Col>
    </Row>
  </Grid>
);
