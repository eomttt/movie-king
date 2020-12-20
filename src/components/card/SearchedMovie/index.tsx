import { TheaterType } from 'constants/theater';
import { SearchedMovieCard } from 'interfaces/card';
import React, { useMemo } from 'react';
import { TheaterTypeColor } from 'styles/color';
import * as Styles from './styles';

const SearchedMovie: React.FunctionComponent<SearchedMovieCard> = ({
  image,
  type,
  location,
  title,
  time,
}) => {
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
        <img src={image} alt="Movie" />
        <Styles.Menu>
          <Styles.MenuContent>
            <Styles.TheaterType color={TheaterTypeColor[type]}>
              {theaterType}
            </Styles.TheaterType>
            <Styles.MovieLocation>{location}</Styles.MovieLocation>
            <Styles.MovieTitle>{title}</Styles.MovieTitle>
            <Styles.MovieTime>{time}</Styles.MovieTime>
          </Styles.MenuContent>
        </Styles.Menu>
      </Styles.Content>
    </Styles.Container>
  );
};

export default SearchedMovie;
