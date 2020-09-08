import MyMovie from 'components/card/MyMovie';
import { IMyMovieCard } from 'interfaces/card';
import React from 'react';
import * as Styles from './styles';

interface IProps {
  myMovies: IMyMovieCard[];
}

const MyMovies: React.FunctionComponent<IProps> = ({ myMovies }) => (
  <Styles.Container>
    {myMovies.map((movie: IMyMovieCard, index: number) => (
      <Styles.Content key={movie.id}>
        <MyMovie
          id={movie.id}
          title={movie.title}
          time={movie.time}
          location={movie.location}
          audiences={movie.audiences}
          fare={movie.fare}
        />
      </Styles.Content>
    ))}
  </Styles.Container>
);

export default MyMovies;
