import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Header, ContainerForm } from './styles';
import Api from '../../Api';

export default function ProfileEdit() {
  const history = useHistory();
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [cpfUser, setCpfUser] = useState('');

  const updateProfile = () => {
    const authorization = {
      headers: {
        auth: window.localStorage.getItem('token'),
      },
    };

    const updateProfileBody = {
      name: nameUser,
      email: emailUser,
      cpf: cpfUser,
    };

    Api.put(`/profile`, updateProfileBody, authorization)
      .then((response) => {
        alert('Dados salvos com sucesso!');
      })
      .catch((err) => {
        console.log('Erro ao salvar os dados!');
      });
  };

  const getProfile = () => {
    const authorization = {
      headers: {
        auth: window.localStorage.getItem('token'),
      },
    };
    Api.get(`/profile`, authorization)
      .then((response) => {
        setNameUser(response.data.user.name);
        setEmailUser(response.data.user.email);
        setCpfUser(response.data.user.cpf);
      })
      .catch((err) => {
        console.log('Erro');
      });
  };

  const handleInputName = (event) => {
    setNameUser(event.target.value);
  };
  const handleInputEmail = (event) => {
    setEmailUser(event.target.value);
  };
  const handleInputCpf = (event) => {
    setCpfUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile();
    history.push('/perfil');
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Body>
      <Header>Editar perfil</Header>
      <ContainerForm onSubmit={handleSubmit}>
        <label htmlFor="name">Nome*</label>
        <input
          required
          value={nameUser}
          name="name"
          type="text"
          onChange={handleInputName}
        />
        <label htmlFor="email">E-mail*</label>
        <input
          required
          value={emailUser}
          name="email"
          type="text"
          onChange={handleInputEmail}
        />
        <label htmlFor="cpf">CPF*</label>
        <input
          required
          value={cpfUser}
          name="cpf"
          type="text"
          onChange={handleInputCpf}
        />
        <button>Salvar</button>
      </ContainerForm>
    </Body>
  );
}
