import SearchedMovie from 'components/card/SearchedMovie';
import { ISearchedMovieCard } from 'interfaces/card';
import React from 'react';
import * as Styles from './styles';

interface IProps {
  movies: ISearchedMovieCard[];
}

const SearchedMovies: React.FunctionComponent<IProps> = ({ movies }) => (
  <Styles.Container>
    {movies.map((movie: ISearchedMovieCard) => (
      <Styles.Content key={movie.id}>
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
