import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './components/GlobalStyles';
import CartProvider from './Context/CartContext/provider';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <CartProvider />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
