import styled from 'styled-components';

export const HeaderBox = styled.header`
  display: flex;
  width: 360px;
  height: 44px;
  margin-top: 20px;
  border-bottom: rgba(0, 0, 0, 0.25) solid 1px;
  position: sticky;
  top: 0px;
  background-color: #fff;
`;

export const ArrowPosition = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 54px;
  width: 175px;
  height: 44px;

  span {
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`;
