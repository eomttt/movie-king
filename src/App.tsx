import Main from 'pages/Main';
import Search from 'pages/Search';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Main} />
    <Route path="/search" component={Search} />
  </BrowserRouter>
);

export default App;
