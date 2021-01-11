import { TheaterType } from 'constants/theater';
import { SearchedMovieCard } from 'interfaces/card';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { TheaterTypeColor } from 'styles/color';
import * as Styles from './styles';

const SearchedMovie = ({
  image,
  type,
  location,
  title,
  time,
}: SearchedMovieCard) => {
  const iframeRef = useRef();
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
        {/* <div dangerouslySetInnerHTML={{ __html: image }} /> */}
        {/* <iframe src={image} title="image" ref={iframeRef} id="iframe" /> */}
        <img src={image} alt="Movie" onError={() => console.log('ERROR', title)} />
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
