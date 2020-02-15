import React from 'react';

import styled from 'styled-components';

import { IMovieCard } from '@interfaces/card';

import MainMovie from './MainMovie';

interface IProps {
  movies: IMovieCard[];
}

const Container = styled.div`

`;

const Content = styled.div`
  margin-bottom: 15px;
`;

const MainMovies: React.FunctionComponent<IProps> = ({ movies }) => (
  <Container>
    {movies.map((movie: IMovieCard, index: number) => (
      <Content key={movie.id}>
        <MainMovie
          rank={index}
          id={movie.id}
          title={movie.title}
          image={movie.image}
          rating={movie.rating}
        />
      </Content>
    ))}
  </Container>
);

export default MainMovies;
