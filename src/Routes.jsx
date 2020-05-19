import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import PageNotFound from './pages/errors/PageNotFound';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/" component={Home} />
          <PageNotFound />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
