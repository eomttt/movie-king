import { BoxOfficeCard } from 'interfaces/card';
import React from 'react';
import * as Styles from './styles';

interface IProps extends BoxOfficeCard {
  rank: number;
}

const MainMovie: React.FunctionComponent<IProps> = ({
  rank,
  image,
  title,
}) => (
  <Styles.Container>
    <Styles.Content>
      <Styles.Ranking>{rank}</Styles.Ranking>
      <img src={image} alt="Movie" />
      <Styles.Menu>
        <Styles.MenuContent>
          <Styles.Title>{title}</Styles.Title>
          <Styles.ButtonContainer>
            <div>예매하기</div>
          </Styles.ButtonContainer>
        </Styles.MenuContent>
      </Styles.Menu>
    </Styles.Content>
  </Styles.Container>
);

export default MainMovie;
