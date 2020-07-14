import React from 'react';

import { Container } from './styles';
import burger from '../../assets/images/burger.png';

function ListItem() {
  return (
    <Container>
      <img src={burger} alt="burger" />
      <h2>Stencil</h2>
      <div>
        <span>2</span>
      </div>
      <div>
        <p>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</p>
        <p>R$ 46,00</p>
        <span>remover</span>
      </div>
    </Container>
  );
}

export default ListItem;
