import { MovieType } from 'constants/movie';
import { ISearchedMovieCard } from 'interfaces/card';
import React, { useMemo } from 'react';
import { movieTypeColor } from 'styles/common';
import * as Styles from './styles';

const SearchedMovie: React.FunctionComponent<ISearchedMovieCard> = ({
  image,
  type,
  location,
  title,
  time,
}) => {
  const movieType = useMemo(() => {
    if (type === MovieType.CGV) {
      return 'CGV';
    }
    if (type === MovieType.LOTTE) {
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
            <Styles.MovieType color={movieTypeColor[type]}>
              {movieType}
            </Styles.MovieType>
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
