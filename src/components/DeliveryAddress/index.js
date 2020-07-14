import React, { useReducer } from 'react';

import { Container, Address } from './styles';

function DeliveryAddress() {
  return (
    <>
      <Container>
        <Address color={'#b8b8b8'} padding={'4px 16px 2px 16px'}>
          Endereço de entrega
        </Address>
        <Address color={'#000'} padding={'4px 16px 2px 16px'}>
          Rua Alessandra Vieira, 41
        </Address>
      </Container>
    </>
  );
}

export default DeliveryAddress;
