import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:#fff no-repeat center top;
    -webkit-font-smoothing:antialiased;
    width: 360px;
    height: 640px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: black 1px;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button{
    cursor:pointer;
    border: none;
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #5cb646;
    transition: 0.5s;
    margin-top: 16px;
    
    :hover {
      transition: 0.5s;
      background-color: #5cd001;
    }
  }

  input {
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    padding: 16px;
  }

  .feed {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  footer {
    border: none;
    border-top: solid 1px #b8b8b8;
    height: 50px;
    position: sticky;
    bottom: 0px;
    background-color: #fff;
    display: flex;

    div {
      width: 120px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  label {
    position: relative;
    bottom: -12px;
    left: 10px;
    background-color: white;
    width: 78px;
    height: 18px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`;
