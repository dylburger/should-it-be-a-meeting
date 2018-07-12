import React from 'react';
import {Route, Switch} from 'react-router';

import AsyncOrNot from './AsyncOrNot';
import InputFromOthers from './InputFromOthers';
import CanItBeAnEmail from './CanItBeAnEmail';
import DoIt from './DoIt';
import Email from './Email';
import HomeContainer from './HomeContainer';
import Meeting from './Meeting';
import GroupChatOrCall from './GroupChatOrCall';
import MakeADecision from './MakeADecision';
import MoreThanOnePerson from './MoreThanOnePerson';

const MainRouter = ({visible}) => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route exact path="/async" component={AsyncOrNot} />
    <Route exact path="/input-from-others" component={InputFromOthers} />
    <Route exact path="/can-be-email" component={CanItBeAnEmail} />
    <Route exact path="/doit" component={DoIt} />
    <Route exact path="/email" component={Email} />
    <Route exact path="/meeting" component={Meeting} />
    <Route exact path="/chat-or-call" component={GroupChatOrCall} />
    <Route exact path="/make-a-decision" component={MakeADecision} />
    <Route exact path="/more-than-one-person" component={MoreThanOnePerson} />
  </Switch>
);

export default MainRouter;
