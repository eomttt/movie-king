import MyMovie from 'components/card/MyMovie';
import { IMyMovieCard } from 'interfaces/card';
import { getNumberWithComma } from 'lib/utils/common';
import React from 'react';
import * as Styles from './styles';

interface IProps {
  myMovies: IMyMovieCard[];
}

const MyMovies: React.FunctionComponent<IProps> = ({ myMovies }) => (
  <Styles.Container>
    {myMovies.map((movieCard) => (
      <Styles.Content key={movieCard.id}>
        <MyMovie movieCard={movieCard} />
      </Styles.Content>
    ))}
  </Styles.Container>
);

export default MyMovies;
