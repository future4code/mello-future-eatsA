import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Cart';
import FeedPage from './pages/FeedPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/feed'>
        <FeedPage />
      </Route>
    </Switch>
  );
}
