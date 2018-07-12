import {string} from 'prop-types';
import React from 'react';
import Button from './Button';

const Question = ({text, leftLink, rightLink}) => (
  <div>
    <p className="question">{text}</p>
    <Button left link={leftLink} text="Yes" />
    <Button right link={rightLink} text="No" />
  </div>
);

Question.propTypes = {
  leftLink: string.isRequired,
  rightLink: string.isRequired,
  text: string.isRequired,
};

export default Question;
