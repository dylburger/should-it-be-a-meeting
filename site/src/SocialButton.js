import {func, object, string} from 'prop-types';
import React from 'react';

import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

const SocialButton = ({url, text, icon, type, clickFunc}) => (
  <span className="social-button">
    <AwesomeButton href={url} type={type} size="icon" target="_blank" action={clickFunc}>
      <span className="social-icon">{icon}</span><span className="social-icon-text">{text}</span>
    </AwesomeButton>
  </span>
);

SocialButton.propTypes = {
  clickFunc: func,
  url: string.isRequired,
  text: string,
  icon: object,
  type: string.isRequired,
};

SocialButton.defaultProps = {
  clickFunc: () => {
  	console.log('User clicked a social media share button')
  },
};

export default SocialButton;