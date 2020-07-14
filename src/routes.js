import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard'

import Login from './pages/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/card'>
        <RestaurantCard />
      </Route>
    </Switch>
  );
}
