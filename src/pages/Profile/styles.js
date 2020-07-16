import styled from 'styled-components';

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 640px;
`;

// =======================================================

export const ContainerOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: 307px;
  margin-top: 8px;
`;

export const ContainerOrders = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  width: 328px;
  height: 306px;
  margin-top: 8px;
  overflow: auto;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 328px;
  height: 102px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 8px;
  overflow: auto;

  span {
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    margin: 0px 16px;
  }

  #store {
    font-weight: normal;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #5cb646;
  }

  #date {
    font-weight: normal;
    font-size: 12px;
    letter-spacing: -0.29px;
    color: #000000;
  }

  #value {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: -0.39px;
    color: #000000;
  }
`;
