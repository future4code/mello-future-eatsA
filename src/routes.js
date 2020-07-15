import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './pages/Cart';
import FeedPage from './pages/FeedPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/carrinho" exact component={Cart} />
      <Route path="/feed" exact component={FeedPage} />
    </Switch>
  );
}
