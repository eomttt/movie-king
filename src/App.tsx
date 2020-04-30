import Main from '@pages/Main';
import Search from '@pages/Search';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Route exact path="/" component={Main} />
    <Route exact path="/search" component={Search} />
  </BrowserRouter>
);

export default App;
