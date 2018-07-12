import React from 'react';
import Grid from './Grid';
import Question from './Question';

export default () => (
  <Grid>
    <Question
      leftLink="#/chat-or-call"
      rightLink="#/email"
      text="Does the group need to talk about this together, at the same time?"
    />
  </Grid>
);
