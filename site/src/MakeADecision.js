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
          <h2>Take action on your own</h2>
          <ul>
            <li>Make a decision</li>
            <li>Communicate the result or next steps</li>
          </ul>
          <Gif
            gifUrl="https://shoulditbeameeting.com/assets/gifs/the-office-andy-dancing.gif"
            gifAlt="That was easy"
          />
        </div>
        <SocialButtonsRow />
      </Col>
    </Row>
  </Grid>
);
