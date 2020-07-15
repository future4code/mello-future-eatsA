import React from 'react';
import { ContainerOrder, OrderInfo } from './styles';

export default function OrderCard(props) {
  return (
    <ContainerOrder>
      <OrderInfo>
        <span id="store">{props.store}</span>
        <span id="date">{props.date}</span>
        <span id="value">{props.value}</span>
      </OrderInfo>
    </ContainerOrder>
  );
}
