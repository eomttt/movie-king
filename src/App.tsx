import { css, Global } from '@emotion/core';
import Main from 'pages/Main';
import Search from 'pages/Search';
import { Route } from 'react-router-dom';
import { BackgroundColor } from 'styles/color';

const App = () => (
  <>
    <Global
      styles={css`
        body {
          background-color: ${BackgroundColor} !important;
          margin: 0 !important;
          font-family: 'Roboto', sans-serif;
        }

        button {
          cursor: pointer;
          color: inherit;
          margin: 0;
          padding: 0;
          border: none;
          background: none;
          outline: none;
        }

        a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }
      `}
    />
    <Route exact path="/" component={Main} />
    <Route path="/search" component={Search} />
  </>
);

export default App;
