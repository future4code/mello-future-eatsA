import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Header } from './styles';

export default function AddressEdit() {
  const history = useHistory();

  const goToProfile = () => {
    history.push('/perfil');
  };

  return (
    <Body>
      <Header>Editar</Header>
      <label htmlFor="publicPlace">Logradouro*</label>
      <input
        //value=""
        placeholder="Rua / Av."
        name="publicPlace"
        type="text"
      />
      <label htmlFor="number">Número*</label>
      <input
        //value=""
        placeholder="Número"
        name="number"
        type="text"
      />
      <label htmlFor="complement">Complemento*</label>
      <input
        //value=""
        placeholder="Apto. / Bloco"
        name="complement"
        type="text"
      />
      <label htmlFor="neighborhood">Bairro*</label>
      <input
        //value=""
        placeholder="Bairro"
        name="neighborhood"
        type="text"
      />
      <label htmlFor="city">Cidade*</label>
      <input
        //value=""
        placeholder="Cidade"
        name="city"
        type="text"
      />
      <label htmlFor="state">Estado*</label>
      <input
        //value=""
        placeholder="Estado"
        name="state"
        type="text"
      />

      <button onClick={goToProfile}>Salvar</button>
    </Body>
  );
}
