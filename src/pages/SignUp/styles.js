import styled from 'styled-components';

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 640px;
  border: solid black;

  p {
    margin-top: 28px;
  }
`;

export const Logo = styled.img`
  width: 104px;
  height: 58px;
  margin-top: 24px;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
`;
