import { css, Global } from '@emotion/core';
import Main from 'pages/Main';
import Search from 'pages/Search';
import MyPage from 'pages/MyPage';
import React from 'react';
import { Route } from 'react-router-dom';
import { BackgroundColor } from 'styles/color';

const App = () => (
  <>
    <Global
      styles={css`
        body {
          background-color: ${BackgroundColor} !important;
          margin: 0 !important;
        }
      `}
    />
    <Route exact path="/" component={Main} />
    <Route path="/search" component={Search} />
    <Route path="/myPage" component={MyPage} />
  </>
);

export default App;
