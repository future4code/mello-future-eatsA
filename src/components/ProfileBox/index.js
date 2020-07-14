import React from 'react';
import { ProfileInfo } from './styles';

export default function ProfileBox(props) {
  return (
    <ProfileInfo onClick={props.onClick}>
      <span>Bruna Oliveira</span>
      <span>bruna_o@gmail.com</span>
      <span>333.333.333-33</span>
    </ProfileInfo>
  );
}
