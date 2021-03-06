import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './home/home.page';
import PageNotFound from './404/404.page';

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
