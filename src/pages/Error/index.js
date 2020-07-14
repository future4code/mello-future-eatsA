import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Logo } from './styles';
import imgLogo from '../../assets/images/logo-future-eats-invert.png';

function Error() {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  const logout = () => {
    window.localStorage.clear();
    history.push('/');
  };

  return (
    <Body>
      <Logo src={imgLogo} alt="Logo" />

      <h3>Ops! Algo deu errado...</h3>
      <button onClick={goToLogin}>Voltar ao Login</button>
      <button onClick={logout}>Logout</button>
    </Body>
  );
}

export default Error;
