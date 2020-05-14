import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import PageNotFound from './pages/errors/PageNotFound.jsx';
import SignIn from './pages/SignIn.jsx';
import Home from './pages/Home.jsx';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <PageNotFound />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
