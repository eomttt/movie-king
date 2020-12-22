import MyMovie from 'components/card/MyMovie';
import { IMyMovieCard } from 'interfaces/card';
import * as Styles from './styles';

interface IProps {
  myMovies: IMyMovieCard[];
}

const MyMovies = ({ myMovies }: IProps) => (
  <Styles.Container>
    {myMovies.map((movieCard) => (
      <Styles.Content key={movieCard.id}>
        <MyMovie movieCard={movieCard} />
      </Styles.Content>
    ))}
  </Styles.Container>
);

export default MyMovies;
