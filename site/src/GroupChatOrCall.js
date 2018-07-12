import React from 'react';
import Grid from './Grid';
import Question from './Question';

export default () => (
  <Grid>
    <Question
      leftLink="#/doit"
      rightLink="#/meeting"
      text="Can you hop on a group chat or quick call to discuss right now, instead of scheduling a meeting for later?"
    />
  </Grid>
);
