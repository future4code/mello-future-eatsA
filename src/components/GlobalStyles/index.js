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
}
body, input, button {
  font:15px Arial, sans-serif;
}
button{
  cursor:pointer;
}

input {
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
}

.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`