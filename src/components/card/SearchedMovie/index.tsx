import { ISearchedMovieCard } from '@interfaces/card';
import React from 'react';
import * as Styles from './styles';

const SearchedMovie: React.FunctionComponent<ISearchedMovieCard> = ({
  time,
  image,
  title,
  location,
  type,
}) => (
  <Styles.Container>
    <Styles.Content>
      <Styles.Ranking>{time}</Styles.Ranking>
      <img src={image} alt="Movie" />
      <Styles.Menu>
        <Styles.MenuContent>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Rating>{`* ${type}`}</Styles.Rating>
          <Styles.ButtonContainer>
            <div>예매하기</div>
          </Styles.ButtonContainer>
        </Styles.MenuContent>
      </Styles.Menu>
    </Styles.Content>
  </Styles.Container>
);

export default SearchedMovie;
