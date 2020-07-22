import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  height: 76px;
  background-color: #eeeeee;
  padding: 5px;
`;

export const Address = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${(props) => props.color};
`;
