import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InicialPage from './pages/InicialPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddressRegister from './pages/AddressRegister';

import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import AddressEdit from './pages/AddressEdit';

import Feed from './pages/FeedPage';
import Cart from './pages/Cart';

import Error from './pages/Error';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={InicialPage} />
      <Route path="/login" exact component={Login} />
      <Route path="/cadastrar" exact component={SignUp} />
      <Route path="/cadastrar-endereco" exact component={AddressRegister} />
      <Route path="/perfil" exact component={Profile} />
      <Route path="/editar-perfil" exact component={ProfileEdit} />
      <Route path="/editar-endereco" exact component={AddressEdit} />
      <Route path="/carrinho" exact component={Cart} />
      <Route path="/feed" exact component={Feed} />
      <Route path="" exact component={Error} />
    </Switch>
  );
}
