import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 188px;
  border: 1px solid #b8b8b8;
  margin-top: 8px;
  border-radius: 8px;
  img {
    width: 328px;
    height: 120px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    object-fit: cover;
  }
  .Restaurante {
  margin: 8px 16px 4px 16px;
  width: 296px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  }
  div {
    margin: 0 16px 16px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      height: 18px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      color: #b8b8b8;
    }
  }
` 