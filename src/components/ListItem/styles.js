import styled from 'styled-components';

export const View = styled.div`
  display: flex;
  width: 328px;
  height: 112px;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 96px;
  height: 112px;
`;

export const ContainerTop = styled.div`
  width: 100%;
  height: 70px;
  /* background-color: blue; */
`;
export const ContainerDown = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: green; */
  width: 100%;
  height: 70px;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 70%;
  height: 140px;
  padding-left: 20px;
  padding-top: 20px;
`;

export const Titulo = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

export const Descricao = styled.div``;
export const Preco = styled.div``;
export const Amount = styled.span`
  margin: 0;
  padding: 0;
  margin-left: 186px;
  margin-top: -20px;
  border: 1px solid green;
  border-radius: 8px;
  p {
    padding: 0;
    margin: 0;
    margin-left: 12px;
  }
`;
export const Adicionar = styled.button`
  background: transparent;
  border-radius: 8px;
  margin-top: -10px;
  width: 97px;
  height: 33px;
  padding: 0 12px 0 12px;
  margin-right: -1px;
  border: 1px solid #e02020;
`;
