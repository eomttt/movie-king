import MainMovie from 'components/card/MainMovie';
import { IMovieCard } from 'interfaces/card';
import React from 'react';
import * as Styles from './styles';

interface IProps {
  movies: IMovieCard[];
}

const MainMovies: React.FunctionComponent<IProps> = ({ movies }) => (
  <Styles.Container>
    {movies.map((movie: IMovieCard, index: number) => (
      <Styles.Content key={movie.id}>
        <MainMovie
          rank={index}
          id={movie.id}
          title={movie.title}
          image={movie.image}
          rating={movie.rating}
        />
      </Styles.Content>
    ))}
  </Styles.Container>
);

export default MainMovies;
