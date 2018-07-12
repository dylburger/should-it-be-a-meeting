import React from 'react';
import Grid from './Grid';
import Question from './Question';

export default () => (
  <Grid>
    <Question
      leftLink="#/more-than-one-person"
      rightLink="#/make-a-decision"
      text="Does the decision require input from other people?"
    />
  </Grid>
);
