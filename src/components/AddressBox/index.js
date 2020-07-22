import React from 'react';
import { AdressInfo, PencilPosition } from './styles';
import { RiPencilLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function AdressBox(props) {
  return (
    <AdressInfo>
      <PencilPosition>
        <span id="gray">Endereço cadastrado</span>
        <Link to="/editar-endereco">
          <RiPencilLine size={'1.5em'} color={'black'} />
        </Link>
      </PencilPosition>
      <span>{props.endereco}</span>
    </AdressInfo>
  );
}
