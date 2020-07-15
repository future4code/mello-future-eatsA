import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Header } from './styles';

export default function ProfileEdit() {
  const history = useHistory();

  const goToProfile = () => {
    history.push('/perfil');
  };

  return (
    <Body>
      <Header>Editar</Header>

      <label htmlFor="name">Nome*</label>
      <input
        //value=""
        placeholder="Nome e sobrenome"
        name="name"
        type="text"
      />
      <label htmlFor="email">E-mail*</label>
      <input
        //value=""
        placeholder="e-mail@email.com"
        name="email"
        type="text"
      />
      <label htmlFor="cpf">CPF*</label>
      <input
        //value=""
        placeholder="000.000.000-00"
        name="cpf"
        type="text"
      />
      <button onClick={goToProfile}>Salvar</button>
    </Body>
  );
}
