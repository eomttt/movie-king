import { AppHeightProvider } from 'contexts/AppHeight';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const queryCache = new QueryCache();

// TODO: Use react-query instead of apollo-boost
// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
// });

console.log('TEST', process.env.GQL_DEV);

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <AppHeightProvider>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen />
      </BrowserRouter>
    </AppHeightProvider>
  </ReactQueryCacheProvider>,
  document.getElementById('root'),
);
