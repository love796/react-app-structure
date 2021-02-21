import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './home/home.component';
import PageNotFound from './404/404.component';

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Pages;
