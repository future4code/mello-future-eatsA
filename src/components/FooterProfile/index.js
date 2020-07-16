import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//GREEN
import ShoppingCartGreen from '../../assets/images/shopping-cart-green.svg';
import AvatarGreen from '../../assets/images/avatar-green.svg';
import HomeIconGreen from '../../assets/images/homepage-green.svg';
//ICONS GRAY
import ShoppingCart from '../../assets/images/shopping-cart.svg';
import Avatar from '../../assets/images/avatar.svg';
import HomeIcon from '../../assets/images/homepage.svg';

import { FooterBox } from './styles';

export default function Footer({ homeIcon, cartIcon, profileIcon }) {
  return (
    <FooterBox>
      <div>
        <Link to="/feed">
          <img src={homeIcon ? HomeIconGreen : HomeIcon} alt="icone" />
        </Link>
      </div>
      <div>
        <Link to="/carrinho">
          <img src={cartIcon ? ShoppingCartGreen : ShoppingCart} alt="icone" />
        </Link>
      </div>
      <div>
        <Link to="/perfil">
          <img src={profileIcon ? AvatarGreen : Avatar} alt="icone" />
        </Link>
      </div>
    </FooterBox>
  );
}
