import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Logo } from './styles';
import Api from '../../Api';
import imgLogo from '../../assets/images/logo-future-eats-invert.png';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    history.push('/cadastrar');
  };

  const goToRegisterAddress = () => {
    history.push('/cadastrar-endereco');
  };

  const goToFeedPage = () => {
    history.push('/feed');
  };

  const handleUpdateEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUpdatePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    const loginBody = {
      email: email,
      password: password,
    };

    try {
      const response = await Api.post(`/login`, loginBody);

      window.localStorage.setItem('token', response.data.token);
      alert('Login realizado com sucesso!');
      console.log('Login realizado com sucesso!');

      if (response.data.user.hasAddress === false) {
        goToRegisterAddress();
      } else {
        goToFeedPage();
      }
    } catch (error) {
      console.log('Algo deu errado no Login!');
      alert('Algo deu errado, tente novamente!');
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token !== null) {
      alert('Você já está logado!');
      history.push('/feed');
    }
  }, [history]);

  return (
    <Body>
      <Logo src={imgLogo} alt="Logo" />

      <label htmlFor="email"> E-mail*</label>
      <input
        value={email}
        placeholder="e-mail@email.com"
        name="email"
        type="text"
        onChange={handleUpdateEmail}
      />
      <label htmlFor="password"> Senha*</label>
      <input
        value={password}
        placeholder="Mínimo 6 caracteres"
        name="password"
        type="password"
        onChange={handleUpdatePassword}
      />
      <button onClick={login}>Entrar</button>

      <p onClick={goToRegister}>Não possui cadastro? Clique aqui!</p>
    </Body>
  );
}

export default Login;
