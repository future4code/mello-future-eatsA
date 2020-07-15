import React from 'react';

import {
  MethodPayment,
  Price,
  Portage,
  SubTitle,
  TitleMethod,
  PropertyDetails,
  SubTitlePropertyDetails,
  Options,
  View,
} from './styles';

import DevliveryAddress from '../../components/DeliveryAddress';
import ListItem from '../../components/ListItem';

function Cart() {
  return (
    <>
      <View>
        <DevliveryAddress />
        <PropertyDetails>
          <SubTitlePropertyDetails>
            Bullguer Vila Madalena
          </SubTitlePropertyDetails>
          <p>R. Fradique Coutinho, 1136 - Vila Madalena</p>
          <p>30 - 45 min</p>
        </PropertyDetails>
        <ListItem />
        <ListItem />
        <Portage>Frete R$ 6,00</Portage>
        <SubTitle>SUBTOTAL</SubTitle>
        <Price>R$ 67,00</Price>
        <TitleMethod>forma de pagamento</TitleMethod>
        <MethodPayment>
          <Options>
            <input type="radio" name="method-payment" value="cash" />
            Dinheiro
          </Options>
          <Options>
            <input type="radio" name="method-payment" value="creditCard" />
            Cartão de Crédito
          </Options>
          <button>Confirmar</button>
        </MethodPayment>
      </View>
    </>
  );
}

export default Cart;
