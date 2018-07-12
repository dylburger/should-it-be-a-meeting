import {Col, Row} from 'antd';
import React from 'react';

import Gif from './Gif';
import Grid from './Grid';
import SocialButtonsRow from './SocialButtonsRow';

export default () => (
  <Grid>
    <p className="answer">
      Great! Set up a group chat or quick call and get it done{' '}
      <span role="img" aria-label="Working hard">
        👩‍💻
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
          <h2>Avoid scheduling a formal meeting for later</h2>
          <ul>
            <li>You&rsquo;ll end up inviting fewer people</li>
            <li>
              And you&rsquo;ll probably end up getting it done more quickly{' ('}
              <a
                href="https://en.wikipedia.org/wiki/Parkinson%27s_law"
                target="_blank"
                rel="noopener noreferrer">
                here&rsquo;s why
              </a>
              {')'}
            </li>
          </ul>
          <Gif
            gifUrl="https://assets.ratethatmeeting.com/assets/gifs/office-space-that-was-easy.gif"
            gifAlt="That was easy"
          />
        </div>
        <SocialButtonsRow />
      </Col>
    </Row>
  </Grid>
);
