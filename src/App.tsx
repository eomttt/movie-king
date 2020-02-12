import React from 'react';

import { createGlobalStyle } from 'styled-components';

import Main from '@/src/pages/Main';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Main />
  </>
);

export default App;
