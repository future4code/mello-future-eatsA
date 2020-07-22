import styled from 'styled-components';

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 640px;
  background-color: black;
`;

export const Logo = styled.img`
  width: 126px;
  height: 65px;

  :hover {
    transition: 0.5s;
    transform: rotate(360deg);
  }
`;
