import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import ApolloClient, { gql } from 'apollo-boost';

import App from './App';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/graphql'
      : '',
});

// For test movie query
client
  .query({
    query: gql`
      query {
        testMovies(limit: 3, rating: 9) {
          id
          title
          rating
        }
        testMovie(id: 15553) {
          title
          summary
        }
      }
    `,
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
