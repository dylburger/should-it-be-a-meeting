import React from 'react';
import Grid from './Grid';
import Question from './Question';

export default () => (
  <Grid>
    <Question
      leftLink="#/async"
      rightLink="#/email"
      text="More than 1 person?"
    />
  </Grid>
);