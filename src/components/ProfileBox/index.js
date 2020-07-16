import React from 'react';
import { ProfileInfo, PencilPosition } from './styles';
import { RiPencilLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function ProfileBox({ name, email, cpf }) {
  return (
    <ProfileInfo>
      <PencilPosition>
        <span>{name}</span>
        <Link to="/editar-perfil">
          <RiPencilLine size={'1.5em'} color={'black'} />
        </Link>
      </PencilPosition>
      <span>{email}</span>
      <span>{cpf}</span>
    </ProfileInfo>
  );
}
