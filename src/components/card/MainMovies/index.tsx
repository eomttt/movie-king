import MainMovie from 'components/card/MainMovie';
import { BoxOfficeCard } from 'interfaces/card';
import * as Styles from './styles';

interface IProps {
  movies: BoxOfficeCard[];
}

const MainMovies = ({ movies }: IProps) => (
  <Styles.Container>
    {movies.map((movie: BoxOfficeCard, index: number) => (
      <Styles.Content key={movie.id}>
        <MainMovie
          rank={index + 1}
          id={movie.id}
          title={movie.title}
          image={movie.image}
        />
      </Styles.Content>
    ))}
  </Styles.Container>
);

export default MainMovies;
