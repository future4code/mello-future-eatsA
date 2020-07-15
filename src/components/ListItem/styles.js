import styled from 'styled-components';

export const View = styled.div`
  display: flex;
  width: 328px;
  height: 112px;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Image = styled.img`
  max-width: 100%;
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
  color: #5cb646;
`;

export const Descricao = styled.div`
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 4px;
`;
export const Preco = styled.div`
  color: #000;
`;

export const Amount = styled.span`
  margin: 0;
  padding: 2px;
  margin-left: 191px;
  margin-top: -21px;
  margin-right: -2px;
  border: 1px solid green;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  color: #5cb646;
  font-size: 16px;
  p {
    padding: 0;
    margin: 0;
    margin-left: 2px;
  }
`;
export const RemoveItem = styled.button`
  background: transparent;
  margin-top: -4px;
  font-size: 12px;
  width: 97px;
  height: 33px;
  padding: 0 12px 0 12px;
  margin-right: -2px;
  border: 1px solid #e02020;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  color: #e02020;

  :hover {
    background-color: #e01017;
    color: #fff;
  }
`;
