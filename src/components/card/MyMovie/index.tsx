import { IMyMovieCard } from 'interfaces/card';
import React from 'react';
import * as Styles from './styles';


const MyMovie: React.FunctionComponent<IMyMovieCard> = ({
  id,
  title,
  time,
  location,
  audiences,
  fare
}) => (
  <Styles.Container>
    <Styles.Content>
      <Styles.Ranking>{id}</Styles.Ranking>
      {/* <img src={image} alt="Movie" /> */}
      <Styles.Menu>
        <Styles.MenuContent>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Rating>{time}</Styles.Rating>
          {/* <Styles.Rating>{`* ${rating}`}</Styles.Rating> */}
          <Styles.ButtonContainer>
            <div>취소하기</div>
          </Styles.ButtonContainer>
        </Styles.MenuContent>
      </Styles.Menu>
    </Styles.Content>
  </Styles.Container>
);

export default MyMovie;
