import React, { useReducer } from 'react';

import { Container, Address } from './styles';

function DeliveryAddress() {
  return (
    <>
      <Container>
        <Address color={'#b8b8b8'}>Endereço de entrega</Address>
        <Address color={'#000'}>Rua Alessandra Vieira, 41</Address>
      </Container>
    </>
  );
}

export default DeliveryAddress;
