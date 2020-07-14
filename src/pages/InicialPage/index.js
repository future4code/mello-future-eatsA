import React from 'react';
import { Link } from 'react-router-dom';
import { Body, Logo } from './styles';
import imgLogo2x from '../../assets/images/logo-future-eats@2x.png';

function InicialPage() {
  return (
    <Body>
      <Link to="/login">
        <Logo src={imgLogo2x} alt="Logo" />
      </Link>
    </Body>
  );
}

export default InicialPage;
