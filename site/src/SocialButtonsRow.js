import {Col, Row} from 'antd';
import React from 'react';

import gaUserClickedSocialMediaShareButton from './ga/gaUserClickedSocialMediaShareButton';
import SocialButton from './SocialButton';

const SocialButtonsRow = ({shareText, clickFunc}) => (
  <Row gutter={8} type="flex" justify="space-around" align="middle">
    <Col xs={{span: 22}} sm={{span: 18}} lg={{span: 16}}>
      <div id="social-buttons-row">
        <h2 className="social-share-header">Share with your network!</h2>
        <SocialButton
          icon={<i className="fab fa-facebook-f" />}
          url="https://www.facebook.com/dialog/share?display=popup&app_id=1843244465741722&href=https%3A%2F%2Fshoulditbeameeting.com"
          type="facebook"
          clickFunc={() =>
            gaUserClickedSocialMediaShareButton(
              'User clicked Facebook share button',
            )}
        />
        <SocialButton
          icon={<i className="fab fa-twitter" />}
          url="https://twitter.com/intent/tweet?text=Thinking%20about%20scheduling%20a%20meeting%3F%20Better%20check%20here%20first.&url=https%3A%2F%2Fshoulditbeameeting.com"
          type="twitter"
          clickFunc={() =>
            gaUserClickedSocialMediaShareButton(
              'User clicked Twitter share button',
            )}
        />
        <SocialButton
          icon={<i className="fab fa-linkedin-in" />}
          url="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fshoulditbeameeting.com&mini=true"
          type="linkedin"
          clickFunc={() =>
            gaUserClickedSocialMediaShareButton(
              'User clicked LinkedIn share button',
            )}
        />
      </div>
    </Col>
  </Row>
);

export default SocialButtonsRow;
