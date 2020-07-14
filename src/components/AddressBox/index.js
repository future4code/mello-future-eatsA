import React from 'react';
import { AdressInfo } from './styles';

export default function AdressBox(props) {
  return (
    <AdressInfo onClick={props.onClick}>
      <span id="gray">Endereço cadastrado</span>
      <span>Rua Alessandra Vieira, 42 - Santana</span>
    </AdressInfo>
  );
}
