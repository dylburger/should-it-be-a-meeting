import {Col, Row} from 'antd';
import React from 'react';

import Gif from './Gif';
import Grid from './Grid';
import SocialButtonsRow from './SocialButtonsRow';

export default () => (
  <Grid>
    <p className="answer">You might need to schedule a meeting </p>
    <Gif
      gifUrl="https://assets.ratethatmeeting.com/assets/gifs/lets-have-a-meeting.gif"
      gifAlt="It&rsquo;s true"
    />
    <Row
      gutter={8}
      type="flex"
      justify="space-around"
      align="middle"
      className="end-node">
      <Col xs={{span: 24}} sm={{span: 20}} md={{span: 18}} lg={{span: 14}}>
        <div className="main-card">
          <h2>1. Create a clear, focused agenda</h2>
          <ul>
            <li>Include estimates for how long each agenda item will take</li>
            <li>
              Send out the agenda <em>before the meeting</em>
            </li>
          </ul>
        </div>
        <div className="main-card">
          <h2>2. Keep the guest list small</h2>
          <ul>
            <li>Invite only people critical to the discussion</li>
            <li>
              But don&rsquo;t leave anyone out whose absence might prevent you
              from accomplishing the goals
            </li>
          </ul>
        </div>
        <div className="main-card">
          <h2>3. Keep it as short as possible</h2>
          <ul>
            <li>
              15 minutes is often{' '}
              <a
                href="https://medium.com/rate-that-meeting/beware-the-hour-long-meeting-6683086126cc"
                target="_blank"
                rel="noopener noreferrer">
                plenty of time
              </a>
            </li>
            <li>An hour is almost always too long</li>
          </ul>
        </div>
        <SocialButtonsRow />
      </Col>
    </Row>
  </Grid>
);
