import styled from 'styled-components';

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 360px;
  height: 640px;
  border: solid black;

  p {
    cursor: pointer;
    margin-top: 28px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;

export const Logo = styled.img`
  width: 104px;
  height: 58px;
  margin-top: 88px;
`;
