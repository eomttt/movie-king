import SearchedMovie from 'components/card/SearchedMovie';
import { SearchedMovieCard } from 'interfaces/card';
import * as Styles from './styles';

interface IProps {
  movies: SearchedMovieCard[];
}

const SearchedMovies = ({ movies }: IProps) => (
  <Styles.Container>
    {movies.map((movie: SearchedMovieCard, index: number) => (
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
