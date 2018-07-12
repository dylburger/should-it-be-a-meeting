import React from 'react';
import Grid from './Grid';
import Question from './Question';

export default () => (
  <Grid>
    <Question
      leftLink="#/email"
      rightLink="#/urgent"
      text="Can this be decided over email?"
    />
  </Grid>
);
