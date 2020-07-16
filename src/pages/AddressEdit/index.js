import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Header, ContainerForm } from './styles';
import Api from '../../Api';
import { useForm } from '../../components/Hooks/useForm';

export default function AddressEdit() {
  const history = useHistory();
  const [address, setAddress] = useState({});
  console.log(address);

  const { form, onChange, resetForm } = useForm({
    street: '',
    number: '',
    complement: '',
    neighbourhood: '',
    city: '',
    state: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const editAddress = () => {
    const bodySiginUp = {
      street: form.street,
      number: form.number,
      complement: form.complement,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
    };

    const authorization = {
      headers: {
        auth: window.localStorage.getItem('token'),
      },
    };

    Api.put(`/address`, bodySiginUp, authorization)
      .then((response) => {
        console.log(response);
        alert('Endereço editado!');
        window.localStorage.setItem('token', response.data.token);
        history.push('/perfil');
      })
      .catch((err) => {
        console.log('Erro ao salvar endereço!');
      });
  };

  const getFullAddress = () => {
    const authorization = {
      headers: {
        auth: window.localStorage.getItem('token'),
      },
    };
    Api.get(`/address`, authorization)
      .then((response) => {
        setAddress(response.data.address);
      })
      .catch((err) => {
        console.log('Erro');
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
    editAddress();
    getFullAddress();
  };

  return (
    <Body>
      <Header>Editar endereço</Header>
      <ContainerForm onSubmit={handleSubmit}>
        <label htmlFor="publicPlace">Logradouro*</label>
        <input
          required
          value={form.street}
          placeholder="Rua / Av."
          name="street"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="number">Número*</label>
        <input
          required
          value={form.number}
          placeholder="Número"
          name="number"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="complement">Complemento*</label>
        <input
          value={form.complement}
          placeholder="Apto. / Bloco"
          name="complement"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="neighbourhood">Bairro*</label>
        <input
          required
          value={form.neighbourhood}
          placeholder="Bairro"
          name="neighbourhood"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="city">Cidade*</label>
        <input
          required
          value={form.city}
          placeholder="Cidade"
          name="city"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="state">Estado*</label>
        <input
          required
          value={form.state}
          placeholder="Estado"
          name="state"
          type="text"
          onChange={handleInputChange}
        />
        <button>Salvar</button>
      </ContainerForm>
    </Body>
  );
}
