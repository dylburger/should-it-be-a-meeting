import {bool, node, string} from 'prop-types';
import React from 'react';

import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-blue.css';

const generateButtonClass = (left, right) => {
  if (left === true) {
    return 'left-btn';
  }
  if (right === true) {
    return 'right-btn';
  }
};

const Button = ({link, left, right, text}) => (
  <span className={generateButtonClass(left, right)}>
    <AwesomeButton href={link} type="primary" size="medium">
      {text}
    </AwesomeButton>
  </span>
);

Button.propTypes = {
  left: bool,
  link: node.isRequired,
  right: bool,
  text: string.isRequired,
};

Button.defaultProps = {
  left: false,
  right: false,
};

export default Button;
