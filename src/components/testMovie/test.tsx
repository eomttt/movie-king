import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const TestMovie = () => (
  <Query
    query={gql`
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
    `}
  >
    {({ loading, error, data }: any) => {
      if (loading) {
        return <p>Loading</p>;
      }

      if (error) {
        return <p>Error</p>;
      }

      return <p>Data</p>;
    }}
  </Query>
);

export default TestMovie;
