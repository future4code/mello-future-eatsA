import React from "react";
import styled from "styled-components";

const View = styled.div`
  display: flex;
  width: 30%;
  height: 160px;
  background-color: yellow;
  border: 1px solid grey;
  border-radius: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 30%;
  height: 100%;
`;

const ContainerTop = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: blue; */
`;
const ContainerDown = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: green; */
  width: 100%;
  height: 70px;
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 70%;
  height: 140px;
  padding-left: 20px;
  padding-top: 20px;
`;

const Titulo = styled.div`
  font-size: 20px;
  font-weight: 800;
`;
const Descricao = styled.div``;
const Preco = styled.div``;
const Adicionar = styled.button``;

const Alimento = () => {
  return (
    <View>
      <Image src="https://picsum.photos/500/700"></Image>
      <Conteudo>
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

export default Alimento;
