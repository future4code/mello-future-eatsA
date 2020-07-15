import styled from 'styled-components';

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 640px;
  border: solid black;

  h4 {
    display: flex;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 104px;
  height: 58px;
  margin-top: 88px;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
`;
