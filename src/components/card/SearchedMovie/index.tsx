import { TheaterType } from 'constants/theater';
import { SearchedMovieCard } from 'interfaces/card';
import { useMemo, useRef } from 'react';
import { TheaterTypeColor } from 'styles/color';
import * as Styles from './styles';

export const SearchedMovie = ({
  image,
  type,
  location,
  title,
  time,
}: SearchedMovieCard) => {
  const theaterType = useMemo(() => {
    if (type === TheaterType.CGV) {
      return 'CGV';
    }
    if (type === TheaterType.LOTTE) {
      return 'LOTTE';
    }
    return 'MEGA';
  }, [type]);

  return (
    <Styles.Container>
      <Styles.Content>
        <img src={image} alt="Movie" onError={() => console.log('ERROR', title)} />
        <Styles.Menu>
          <Styles.MenuContent>
            <Styles.TheaterInfo>
              <Styles.TheaterType color={TheaterTypeColor[type]}>
                {theaterType}
              </Styles.TheaterType>
              <Styles.MovieLocation>{location}</Styles.MovieLocation>
            </Styles.TheaterInfo>
            <Styles.MovieTitle>{title}</Styles.MovieTitle>
            <Styles.MovieTime>{time}</Styles.MovieTime>
          </Styles.MenuContent>
        </Styles.Menu>
      </Styles.Content>
    </Styles.Container>
  );
};
