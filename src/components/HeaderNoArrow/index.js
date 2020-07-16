import React from 'react';
import { HeaderBox } from './styles';

export default function HeaderNoArrow(props) {
  return (
    <HeaderBox>
      <span>{props.title}</span>
    </HeaderBox>
  );
}
