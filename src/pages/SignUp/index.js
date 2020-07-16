import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Logo, ContainerForm } from './styles';
import Api from '../../Api';
import { useForm } from '../../Hooks/useForm';
import imgLogo from '../../assets/images/logo-future-eats-invert.png';

export default function SignUp() {
  const history = useHistory();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const { form, onChange, resetForm } = useForm({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  const siginUp = () => {
    const bodySiginUp = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
    };
    Api.post(`/signup`, bodySiginUp)
      .then((response) => {
        console.log(response);
        alert('Dados salvos! Agora, faça login');
      })
      .catch((err) => {
        console.log(
          'Erro ao salvar dados! - Possíveis causas: CPF ou e-mail já cadastrado'
        );
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetForm();
    siginUp();
    history.push('/login');
  };

  return (
    <Body>
      <Logo src={imgLogo} alt="Logo" />
      <ContainerForm onSubmit={handleSubmit}>
        <h4>Cadastrar</h4>

        <label htmlFor="name">Nome*</label>
        <input
          required
          value={form.name}
          placeholder="Nome e sobrenome"
          name="name"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="email">E-mail*</label>
        <input
          required
          value={form.email}
          placeholder="e-mail@email.com"
          name="email"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="cpf">CPF*</label>
        <input
          required
          value={form.cpf}
          placeholder="000.000.000-00"
          pattern="/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/"
          title="Insira os pontos e traços necessários"
          name="cpf"
          type="text"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Senha*</label>
        <input
          required
          value={form.password}
          placeholder="Mínimo 6 caracteres"
          pattern="[A-Za-z0-9 ]{6,}"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <label htmlFor="confirmPasswd">Senha*</label>
        <input
          required
          value={form.confirmPwd}
          placeholder="Confirme a senha anterior"
          pattern="[A-Za-z0-9 ]{6,}"
          name="confirmPasswd"
          type="password"
          onChange={handleInputChange}
        />
        <button type="submit">Criar</button>
      </ContainerForm>
    </Body>
  );
}
