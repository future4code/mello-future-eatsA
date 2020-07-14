import React from 'react';
import { useHistory } from 'react-router-dom';
import { Body, Header } from './styles';
import AddressBox from '../../components/AddressBox';
import ProfileBox from '../../components/ProfileBox';
import SectionTitle from '../../components/SectionTitle';
import OrderCard from '../../components/OrderCard';

export default function Profile() {
  const history = useHistory();

  const goToProfileEdit = () => {
    history.push('/editar-perfil');
  };

  const goToAddressEdit = () => {
    history.push('/editar-endereco');
  };

  return (
    <Body>
      <Header>Meu perfil</Header>
      <ProfileBox onClick={goToProfileEdit} />
      <AddressBox onClick={goToAddressEdit} />
      <SectionTitle title={'Histórico de pedidos'} />
      <OrderCard
        store={'Bullguer'}
        date={'23 outubro 2019'}
        value={'SUBTOTAL R$67,00'}
      />
      {/* SE TIVER HISTÓRICO, MOSTRAR A LISTA - SE NÃO, MOSTRAR A FRASE: "Você não realizou nenhum pedido" */}
    </Body>
  );
}
