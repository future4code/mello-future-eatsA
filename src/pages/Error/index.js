import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Logo } from './styles';
import imgLogo from '../../assets/images/logo-future-eats-invert.png';
import FooterProfile from '../../components/FooterProfile';
import Header from '../../components/Header';

function Error() {
  const history = useHistory();

  const logout = () => {
    window.localStorage.clear();
    history.push('/');
  };

  return (
    <Body>
      <Header to="/feed" title="Error" />
      <Logo src={imgLogo} alt="Logo" />
      <h3>Ops! Algo deu errado...</h3>
      <button onClick={logout}>Logout</button>
      <FooterProfile profileIcon={true} />
    </Body>
  );
}

export default Error;
