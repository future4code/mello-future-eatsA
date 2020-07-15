import React from 'react';

import {
  Adicionar,
  ContainerDown,
  ContainerTop,
  Conteudo,
  Descricao,
  Image,
  Preco,
  Titulo,
  View,
  Amount,
} from './styles';

const ListItem = () => {
  return (
    <View>
      <Image src="https://picsum.photos/500/700"></Image>
      <Conteudo>
        <Amount>
          <p>2</p>
        </Amount>
        <ContainerTop>
          <Titulo>Bullger</Titulo>

          <Descricao>Pão, carne, queijo</Descricao>
        </ContainerTop>
        <ContainerDown>
          <Preco>R$20,00</Preco>
          <Adicionar>Adicionar</Adicionar>
        </ContainerDown>
      </Conteudo>
    </View>
  );
};

export default ListItem;
