import SearchedMovie from 'components/card/SearchedMovie';
import { SearchedMovieCard } from 'interfaces/card';
import React from 'react';
import * as Styles from './styles';

interface IProps {
  movies: SearchedMovieCard[];
}

const SearchedMovies: React.FunctionComponent<IProps> = ({ movies }) => (
  <Styles.Container>
    {movies.map((movie: SearchedMovieCard, index: number) => (
      <Styles.Content key={movie.id} index={index}>
        <SearchedMovie
          id={movie.id}
          time={movie.time}
          image={movie.image}
          title={movie.title}
          location={movie.location}
          type={movie.type}
        />
      </Styles.Content>
    ))}
  </Styles.Container>
);

export default SearchedMovies;
