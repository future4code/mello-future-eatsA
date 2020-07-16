import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Header, ContainerOrder, OrderInfo } from './styles';
import Api from '../../Api';
import AddressBox from '../../components/AddressBox';
import ProfileBox from '../../components/ProfileBox';
import SectionTitle from '../../components/SectionTitle';

export default function Profile() {
  const history = useHistory();

  const [profile, setProfile] = useState({});
  const [historyOrder, setHistoryOrder] = useState([]);

  const goToAddressEdit = () => {
    history.push('/editar-endereco');
  };
  const goToProfileEdit = () => {
    history.push('/editar-perfil');
  };

  const logout = () => {
    window.localStorage.clear();
    history.push('/');
  };

  const getProfile = () => {
    const authorization = {
      headers: {
        auth: window.localStorage.getItem('token'),
      },
    };
    Api.get(`/profile`, authorization)
      .then((response) => {
        setProfile(response.data.user);
      })
      .catch((err) => {
        console.log('Erro');
      });
  };

  const getOrdersHistory = () => {
    const authorization = {
      headers: {
        auth: window.localStorage.getItem('token'),
      },
    };
    Api.get(`/orders/history`, authorization)
      .then((response) => {
        setHistoryOrder(response.data);
      })
      .catch((err) => {
        console.log('Erro');
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <Body>
      <Header margin={'100px'}>Meu perfil</Header>
      <ProfileBox
        onClick={goToProfileEdit}
        name={profile.name}
        email={profile.email}
        cpf={profile.cpf}
      />
      <AddressBox endereco={profile.address} onClick={goToAddressEdit} />
      <SectionTitle title={'Histórico de pedidos'} />

      {historyOrder.length > 0 && (
        <ContainerOrder>
          <OrderInfo>
            <span id="store">store</span>
            <span id="date">date</span>
            <span id="value">value</span>
          </OrderInfo>
        </ContainerOrder>
      )}
      {historyOrder.length === 0 && <p>Você não realizou nenhum pedido</p>}

      <button onClick={logout}>Logout</button>
    </Body>
  );
}
