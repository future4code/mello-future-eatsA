import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard'
import FeedPage from './pages/FeedPage'
import Login from './pages/login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/inicio' exact component={FeedPage} />
    </Switch>
  );
}
