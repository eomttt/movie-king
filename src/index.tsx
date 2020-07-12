import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppHeightProvider } from 'contexts/AppHeight';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppHeightProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppHeightProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
