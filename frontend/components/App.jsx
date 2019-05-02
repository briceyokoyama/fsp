import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './mainpage/MainPage';
import LoginFormContainer from './sessionform/LoginFormContainer';
import SignupFormContainer from './sessionform/SignupFormContainer';
import { AuthRoute } from '../util/route_util'

const App = () => (
  <Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={MainPage} />
  </Switch>
)

export default App;